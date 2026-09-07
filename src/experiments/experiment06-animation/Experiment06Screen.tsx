/**
 * Experiment 06 — Heavy Animation
 * Placeholder screen. Will be implemented in Phase 8.
 */

import React from 'react';
import {ExperimentPlaceholder} from '../../components/ExperimentPlaceholder';

export const Experiment06Screen: React.FC = () => {
  return (
    <ExperimentPlaceholder
      experimentNumber="06"
      title="Heavy Animation"
      description="Understand animation performance and the difference between JS-driven work and animation work that can execute independently of JS. Frame budget at 60Hz/120Hz."
    />
  );
};
