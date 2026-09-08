/**
 * RenderCounter.tsx
 *
 * A reusable development-only component that displays how many times
 * a component has rendered.
 *
 * Usage:
 *   <RenderCounter label="ProductCard #1" />
 *
 * Display:
 *   ProductCard #1 renders: 12
 *
 * Used heavily in Experiment 02 (Unnecessary Re-renders)
 * and Experiment 05 (Expensive List Item Rendering).
 */

import React, {useRef} from 'react';
import {Text, StyleSheet} from 'react-native';
import {PerformanceLabConfig} from '../performance/PerformanceLabConfig';

interface RenderCounterProps {
  label: string;
}

export const RenderCounter: React.FC<RenderCounterProps> = ({label}) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  // Only show in development mode with debug overlay enabled
  if (!__DEV__ || !PerformanceLabConfig.showDebugOverlay) {
    return null;
  }

  return (
    <Text style={styles.counter}>
      {label} renders: {renderCount.current}
    </Text>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 10,
    color: '#FF6B6B',
    fontFamily: 'monospace',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
});
