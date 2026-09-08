/**
 * StartupMetrics.ts
 *
 * Collects and stores timing data for each startup phase.
 * Used primarily by Experiment 01 (App Startup Time).
 *
 * Phases tracked:
 * - APP_START       — Application process launch
 * - JS_INIT         — JavaScript runtime initialization
 * - MODULE_INIT     — Module-level code execution
 * - NAV_INIT        — Navigation setup and registration
 * - DB_INIT         — Database initialization
 * - API_INIT        — API service initialization
 * - INITIAL_RENDER  — First React render cycle
 * - APP_INTERACTIVE — App reaches interactive state
 * - TTI             — Lab-defined Time To Interactive
 */

import {PerformanceMarker} from './PerformanceMarker';

export type StartupPhase =
  | 'APP_START'
  | 'JS_INIT'
  | 'MODULE_INIT'
  | 'NAV_INIT'
  | 'DB_INIT'
  | 'API_INIT'
  | 'INITIAL_RENDER'
  | 'FIRST_SCREEN_READY'
  | 'APP_INTERACTIVE'
  | 'TTI';

export interface StartupMetricEntry {
  phase: StartupPhase;
  duration?: number;
  label: string;
}

const PHASE_LABELS: Record<StartupPhase, string> = {
  APP_START: 'App Start',
  JS_INIT: 'JS Init',
  MODULE_INIT: 'Module Init',
  NAV_INIT: 'Navigation Init',
  DB_INIT: 'DB Init',
  API_INIT: 'API Init',
  INITIAL_RENDER: 'Initial Render',
  FIRST_SCREEN_READY: 'First Screen Ready',
  APP_INTERACTIVE: 'App Interactive',
  TTI: 'Lab TTI',
};

export const StartupMetrics = {
  /**
   * Begin a startup phase measurement.
   */
  beginPhase(phase: StartupPhase): void {
    PerformanceMarker.begin(phase);
  },

  /**
   * End a startup phase measurement.
   */
  endPhase(phase: StartupPhase): number | undefined {
    return PerformanceMarker.end(phase);
  },

  /**
   * Get the duration of a specific startup phase.
   */
  getPhaseDuration(phase: StartupPhase): number | undefined {
    return PerformanceMarker.getDuration(phase);
  },

  /**
   * Get all startup metrics as an array of entries.
   * Only includes phases that have been measured.
   */
  getAllMetrics(): StartupMetricEntry[] {
    const phases: StartupPhase[] = [
      'APP_START',
      'JS_INIT',
      'MODULE_INIT',
      'NAV_INIT',
      'DB_INIT',
      'API_INIT',
      'INITIAL_RENDER',
      'FIRST_SCREEN_READY',
      'APP_INTERACTIVE',
      'TTI',
    ];

    return phases.map(phase => ({
      phase,
      duration: PerformanceMarker.getDuration(phase),
      label: PHASE_LABELS[phase],
    }));
  },

  /**
   * Log a startup-specific summary to the console.
   */
  logStartupSummary(): void {
    if (!__DEV__) {
      return;
    }

    console.log('\n╔═══════════════════════════════════════╗');
    console.log('║   RNPerfLab — Startup Metrics         ║');
    console.log('╠═══════════════════════════════════════╣');

    const metrics = StartupMetrics.getAllMetrics();

    metrics.forEach(({label, duration}) => {
      if (duration !== undefined) {
        console.log(`║  ${label.padEnd(22)} ${duration.toFixed(2).padStart(10)}ms ║`);
      }
    });

    console.log('╚═══════════════════════════════════════╝\n');
  },
};
