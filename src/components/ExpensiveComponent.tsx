/**
 * ExpensiveComponent.tsx
 *
 * A component that performs intentionally expensive work during render.
 * Used in Experiment 02 and Experiment 03.
 *
 * Will be implemented with actual expensive render-time work
 * when those experiments are built.
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ExpensiveComponentProps {
  label: string;
  data?: unknown;
}

export const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.placeholder}>
        Placeholder — expensive work will be added in experiment phases.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E2E',
    borderRadius: 8,
    padding: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#2D2D3F',
  },
  label: {
    color: '#E0E0E0',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  placeholder: {
    color: '#6B6B80',
    fontSize: 11,
    fontStyle: 'italic',
  },
});
