/**
 * PerformanceMarker.ts
 *
 * Common performance instrumentation layer for the RN Performance Lab.
 *
 * Uses:
 * - `performance.now()` for JS timing
 * - `performance.mark()` / `performance.measure()` where supported
 * - Human-readable marker names prefixed with `RNPerfLab:`
 *
 * Degrades safely when APIs are unavailable.
 *
 * Usage:
 *   PerformanceMarker.begin('DB_INIT');
 *   // ... initialization work ...
 *   PerformanceMarker.end('DB_INIT');
 *
 *   const duration = PerformanceMarker.getDuration('DB_INIT');
 */

import {PerformanceLabConfig} from './PerformanceLabConfig';

// The Performance API is available in React Native's JS runtime (Hermes/JSC)
// but may not be in the default TypeScript lib definitions.
declare const performance: {
  now: () => number;
  mark: (name: string) => void;
  measure: (name: string, startMark: string, endMark: string) => void;
} | undefined;

const PREFIX = 'RNPerfLab:';

interface MarkerEntry {
  beginTime: number;
  endTime?: number;
  duration?: number;
}

// Store all marker data in memory
const markers: Map<string, MarkerEntry> = new Map();

/**
 * Check if the Performance API is available in the current JS environment.
 */
function hasPerformanceAPI(): boolean {
  return (
    performance !== undefined &&
    typeof performance.now === 'function'
  );
}

/**
 * Check if performance.mark/measure are available.
 */
function hasPerformanceMarkAPI(): boolean {
  return (
    hasPerformanceAPI() &&
    performance !== undefined &&
    typeof performance.mark === 'function' &&
    typeof performance.measure === 'function'
  );
}

/**
 * Get the current high-resolution timestamp.
 */
function now(): number {
  if (hasPerformanceAPI() && performance !== undefined) {
    return performance.now();
  }
  return Date.now();
}

export const PerformanceMarker = {
  /**
   * Begin a named performance section.
   */
  begin(name: string): void {
    if (!PerformanceLabConfig.enablePerfMarkers) {
      return;
    }

    const markerName = `${PREFIX}${name}`;
    const timestamp = now();

    markers.set(name, {beginTime: timestamp});

    // Use Performance Mark API if available
    if (hasPerformanceMarkAPI() && performance !== undefined) {
      try {
        performance.mark(`${markerName}_START`);
      } catch {
        // Silently ignore if mark fails
      }
    }

    if (__DEV__) {
      console.log(`[PERF] ▶ ${markerName} started at ${timestamp.toFixed(2)}ms`);
    }
  },

  /**
   * End a named performance section.
   */
  end(name: string): number | undefined {
    if (!PerformanceLabConfig.enablePerfMarkers) {
      return undefined;
    }

    const markerName = `${PREFIX}${name}`;
    const timestamp = now();
    const entry = markers.get(name);

    if (!entry) {
      if (__DEV__) {
        console.warn(
          `[PERF] ⚠ ${markerName} end() called without matching begin()`,
        );
      }
      return undefined;
    }

    entry.endTime = timestamp;
    entry.duration = timestamp - entry.beginTime;

    // Use Performance Measure API if available
    if (hasPerformanceMarkAPI() && performance !== undefined) {
      try {
        performance.mark(`${markerName}_END`);
        performance.measure(
          markerName,
          `${markerName}_START`,
          `${markerName}_END`,
        );
      } catch {
        // Silently ignore if measure fails
      }
    }

    if (__DEV__) {
      console.log(
        `[PERF] ■ ${markerName} ended — duration: ${entry.duration.toFixed(2)}ms`,
      );
    }

    return entry.duration;
  },

  /**
   * Get the duration of a completed marker.
   * Returns undefined if the marker hasn't been completed.
   */
  getDuration(name: string): number | undefined {
    return markers.get(name)?.duration;
  },

  /**
   * Get the begin timestamp of a marker.
   */
  getBeginTime(name: string): number | undefined {
    return markers.get(name)?.beginTime;
  },

  /**
   * Get all recorded markers and their data.
   */
  getAllMarkers(): Record<string, MarkerEntry> {
    const result: Record<string, MarkerEntry> = {};
    markers.forEach((value, key) => {
      result[key] = {...value};
    });
    return result;
  },

  /**
   * Reset all recorded markers.
   */
  reset(): void {
    markers.clear();
    if (__DEV__) {
      console.log('[PERF] All markers reset');
    }
  },

  /**
   * Log a summary of all recorded markers to the console.
   */
  logSummary(): void {
    if (!__DEV__) {
      return;
    }

    console.log('\n═══════════════════════════════════════');
    console.log('  RNPerfLab — Performance Summary');
    console.log('═══════════════════════════════════════');

    markers.forEach((entry, name) => {
      const status = entry.duration !== undefined ? '✓' : '…';
      const duration =
        entry.duration !== undefined
          ? `${entry.duration.toFixed(2)}ms`
          : 'in progress';
      console.log(`  ${status} ${PREFIX}${name}: ${duration}`);
    });

    console.log('═══════════════════════════════════════\n');
  },
};
