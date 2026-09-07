/**
 * Experiment 02 — Unnecessary Re-renders
 * Placeholder screen. Will be implemented in Phase 4.
 */

import React from 'react';
import {ExperimentPlaceholder} from '../../components/ExperimentPlaceholder';

export const Experiment02Screen: React.FC = () => {
  return (
    <ExperimentPlaceholder
      experimentNumber="02"
      title="Unnecessary Re-renders"
      description="Learn how unnecessary React component renders affect JavaScript work and frame performance. Parent-child rendering, React.memo, useCallback, state placement."
    />
  );
};
