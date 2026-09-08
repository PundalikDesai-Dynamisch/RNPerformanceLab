/**
 * PerformanceLabConfig.ts
 *
 * Global configuration for the RN Performance Lab.
 *
 * IMPORTANT: `startupMode` must be changed BEFORE launching the application
 * because startup performance cannot be tested by selecting a mode
 * after the app has already started.
 */

export type StartupMode = 'bad' | 'fixed';

export type ExperimentStatus =
  | 'not_started'
  | 'profiled'
  | 'root_cause_found'
  | 'fixed';

export const ExperimentStatusEmoji: Record<ExperimentStatus, string> = {
  not_started: '⬜',
  profiled: '🟡',
  root_cause_found: '🔵',
  fixed: '🟢',
};

export const ExperimentStatusLabel: Record<ExperimentStatus, string> = {
  not_started: 'Not started',
  profiled: 'Profiled',
  root_cause_found: 'Root cause found',
  fixed: 'Fixed',
};

export const PerformanceLabConfig = {
  /**
   * Controls whether the app starts in 'bad' (intentionally slow) or 'fixed'
   * (optimized) mode for the startup experiment.
   *
   * Change this value BEFORE launching the app.
   */
  startupMode: 'bad' as StartupMode,

  /**
   * When true, performance markers will be recorded and logged.
   */
  enablePerfMarkers: true,

  /**
   * When true, debug overlays (like RenderCounter) will be visible.
   */
  showDebugOverlay: true,
};
