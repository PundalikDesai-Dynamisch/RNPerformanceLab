/**
 * StartupMetricsDisplay.tsx
 *
 * Dev UI component for Experiment 01.
 * Renders the collected startup metrics from StartupMetrics.ts.
 */

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StartupMetrics, StartupMetricEntry} from '../performance/StartupMetrics';

export const StartupMetricsDisplay: React.FC = () => {
  const [metrics, setMetrics] = useState<StartupMetricEntry[]>([]);

  const refreshMetrics = () => {
    setMetrics(StartupMetrics.getAllMetrics());
  };

  // Initially load metrics
  useEffect(() => {
    refreshMetrics();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Startup Phases (ms)</Text>
        <TouchableOpacity onPress={refreshMetrics} style={styles.refreshButton}>
          <Text style={styles.refreshText}>↻ Refresh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.table}>
        {metrics.map((metric, index) => {
          const isComplete = metric.duration !== undefined;
          return (
            <View key={metric.phase} style={[styles.row, index % 2 === 1 && styles.rowAlt]}>
              <Text style={styles.phaseLabel}>{metric.label}</Text>
              <Text style={[styles.phaseDuration, !isComplete && styles.phasePending]}>
                {isComplete ? `${metric.duration!.toFixed(2)}` : 'Pending...'}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E2E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#2D2D3F',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: '600',
  },
  refreshButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#2D2D3F',
    borderRadius: 6,
  },
  refreshText: {
    color: '#6C5CE7',
    fontSize: 12,
    fontWeight: '500',
  },
  table: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#181824',
  },
  rowAlt: {
    backgroundColor: '#1A1A27',
  },
  phaseLabel: {
    color: '#A0A0B8',
    fontSize: 14,
  },
  phaseDuration: {
    color: '#F9CA24',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  phasePending: {
    color: '#6B6B80',
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
});
