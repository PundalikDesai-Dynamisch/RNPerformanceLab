/**
 * Experiment 03 — Heavy JavaScript Calculation
 * Placeholder screen. Will be implemented in Phase 5.
 */

import React from 'react';
import {ExperimentPlaceholder} from '../../components/ExperimentPlaceholder';

export const Experiment03Screen: React.FC = () => {
  return (
    <ExperimentPlaceholder
      experimentNumber="03"
      title="Heavy JS Calculation"
      description="Learn what happens when synchronous JavaScript work occupies the JS thread for too long. JS thread blocking, frame deadlines, CPU-bound work."
    />
  );
};
