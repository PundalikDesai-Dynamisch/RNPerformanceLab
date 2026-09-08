/**
 * Experiment 01 — App Startup Time
 * Placeholder screen. Will be implemented in Phase 2.
 */

import React from 'react';
import {ExperimentPlaceholder} from '../../components/ExperimentPlaceholder';

export const Experiment01Screen: React.FC = () => {
  return (
    <ExperimentPlaceholder
      experimentNumber="01"
      title="App Startup Time"
      description="Learn how to analyze what happens between launching a React Native application and reaching an interactive first screen. Cold start, warm start, TTI, JS initialization, module initialization, Perfetto markers."
    />
  );
};
