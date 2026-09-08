/**
 * Experiment 01 — App Startup Time
 * Placeholder screen. Will be implemented in Phase 2.
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { StartupMetrics } from '../../performance/StartupMetrics';
import { PerformanceLabConfig } from '../../performance/PerformanceLabConfig';
import { StartupMetricsDisplay } from '../../components/StartupMetricsDisplay';
import { ApiService } from '../../services/api/ApiService';
import { DatabaseService } from '../../services/database/DatabaseService';

// 1. EAGER MODULE IMPORT (Intentionally Bad)
// This will block the JS thread immediately when the screen is imported by the Navigator.
import { ExpensiveModule } from './expensiveModule';

export const Experiment01Screen: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    StartupMetrics.beginPhase('FIRST_SCREEN_READY');

    // We only simulate the bad startup when specifically testing this experiment
    // OR if the config is set to bad.
    const runBadStartup = async () => {
      // Begin overall TTI measurement
      StartupMetrics.beginPhase('APP_INTERACTIVE');
      StartupMetrics.beginPhase('TTI');

      if (PerformanceLabConfig.startupMode === 'bad') {
        // 2. SEQUENTIAL BLOCKING INIT (Intentionally Bad)
        // API and DB are initialized one after another instead of in parallel.
        await ApiService.initialize();
        await DatabaseService.initialize();
      } else {
        // FIXED mode (to be implemented by user later)
        // For now, it just bypasses the intentional delay.
      }

      // Mark first screen ready before triggering re-render
      StartupMetrics.endPhase('FIRST_SCREEN_READY');

      setIsReady(true);

      // End TTI after React has had a chance to commit the interactive state
      requestAnimationFrame(() => {
        StartupMetrics.endPhase('APP_START');
        StartupMetrics.endPhase('APP_INTERACTIVE');
        StartupMetrics.endPhase('TTI');

        // Log the summary to console
        StartupMetrics.logStartupSummary();
      });
    };

    runBadStartup();
  }, []);

  useEffect(() => {
    if (isReady) {
      StartupMetrics.endPhase('INITIAL_RENDER');
    }
  });

  if (isReady) {
    StartupMetrics.beginPhase('INITIAL_RENDER');
  }

  // 3. GATING INTERACTIVITY (Intentionally Bad)
  // The user sees nothing but a spinner until all non-critical work finishes.
  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6C5CE7" />
        <Text style={styles.loadingText}>Loading heavy resources...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Startup Time (BAD)</Text>
      <Text style={styles.subtitle}>
        Heavy module initialized. Data count: {ExpensiveModule.count}
      </Text>

      <StartupMetricsDisplay />

      <Text style={styles.instructions}>
        See PERFORMANCE_LAB.md and experiment01-startup/README.md for instructions on how to profile this with Perfetto.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#13131A',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13131A',
  },
  loadingText: {
    color: '#A0A0B8',
    marginTop: 12,
  },
  title: {
    color: '#E0E0E0',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#8888AA',
    fontSize: 14,
    marginBottom: 24,
  },
  instructions: {
    color: '#6B6B80',
    fontSize: 12,
    marginTop: 20,
    fontStyle: 'italic',
  },
});
