/**
 * Experiment 05 — Expensive List Item Rendering
 * Placeholder screen. Will be implemented in Phase 7.
 */

import React from 'react';
import {ExperimentPlaceholder} from '../../components/ExperimentPlaceholder';

export const Experiment05Screen: React.FC = () => {
  return (
    <ExperimentPlaceholder
      experimentNumber="05"
      title="Expensive List Item"
      description="Learn the difference between a large list and an expensive row. Even a well-virtualized list can be slow if every visible row is expensive."
    />
  );
};
