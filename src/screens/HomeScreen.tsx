/**
 * HomeScreen.tsx
 *
 * The main dashboard for the RN Performance Lab.
 * Displays cards for each experiment with status tracking.
 */

import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ExperimentCard} from '../components/ExperimentCard';
import {ExperimentStatus} from '../performance/PerformanceLabConfig';
import {RootStackParamList} from '../app/navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface ExperimentConfig {
  id: string;
  experimentNumber: string;
  title: string;
  concept: string;
  profiler: string;
  status: ExperimentStatus;
  screen: keyof RootStackParamList;
}

const experiments: ExperimentConfig[] = [
  {
    id: 'exp01',
    experimentNumber: '01',
    title: 'App Startup Time',
    concept:
      'Cold start, warm start, TTI, JS initialization, module initialization, navigation init, API/DB init, Perfetto markers',
    profiler: 'Perfetto + React DevTools',
    status: 'not_started',
    screen: 'Experiment01',
  },
  {
    id: 'exp02',
    experimentNumber: '02',
    title: 'Unnecessary Re-renders',
    concept:
      'React render, component re-render, parent-child rendering, React.memo, useCallback, state placement',
    profiler: 'React DevTools Profiler',
    status: 'not_started',
    screen: 'Experiment02',
  },
  {
    id: 'exp03',
    experimentNumber: '03',
    title: 'Heavy JS Calculation',
    concept:
      'JS thread blocking, synchronous work, frame deadlines, dropped frames, CPU-bound work',
    profiler: 'React DevTools + Perfetto',
    status: 'not_started',
    screen: 'Experiment03',
  },
  {
    id: 'exp04',
    experimentNumber: '04',
    title: 'Large FlatList',
    concept:
      'List virtualization, FlatList config, scrolling performance, windowing, initial render cost',
    profiler: 'React DevTools + Perfetto',
    status: 'not_started',
    screen: 'Experiment04',
  },
  {
    id: 'exp05',
    experimentNumber: '05',
    title: 'Expensive List Item',
    concept:
      'Component render cost, memoization, stable props, useCallback, useMemo, object/function identity',
    profiler: 'React DevTools Profiler',
    status: 'not_started',
    screen: 'Experiment05',
  },
  {
    id: 'exp06',
    experimentNumber: '06',
    title: 'Heavy Animation',
    concept:
      'JS-driven animation, UI thread, frame budget (16.67ms at 60Hz), native animation, jank',
    profiler: 'Perfetto',
    status: 'not_started',
    screen: 'Experiment06',
  },
  {
    id: 'exp07',
    experimentNumber: '07',
    title: 'Image-Heavy Screen',
    concept:
      'Image size vs display size, decoding, memory pressure, caching, lazy loading',
    profiler: 'Perfetto + Memory Tools',
    status: 'not_started',
    screen: 'Experiment07',
  },
];

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Lab Header */}
        <View style={styles.labHeader}>
          <Text style={styles.labIcon}>⚡</Text>
          <Text style={styles.labTitle}>RN Performance Lab</Text>
          <Text style={styles.labSubtitle}>
            Profile → Understand → Hypothesize → Fix → Verify
          </Text>
        </View>

        {/* Experiment Dashboard */}
        <View style={styles.dashboardHeader}>
          <Text style={styles.sectionTitle}>Experiments</Text>
          <View style={styles.legendRow}>
            <Text style={styles.legendItem}>⬜ Not started</Text>
            <Text style={styles.legendItem}>🟡 Profiled</Text>
            <Text style={styles.legendItem}>🔵 Root cause</Text>
            <Text style={styles.legendItem}>🟢 Fixed</Text>
          </View>
        </View>

        {experiments.map(exp => (
          <ExperimentCard
            key={exp.id}
            experimentNumber={exp.experimentNumber}
            title={exp.title}
            concept={exp.concept}
            profiler={exp.profiler}
            status={exp.status}
            onPress={() => navigation.navigate(exp.screen)}
          />
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131A',
  },
  scrollContent: {
    paddingTop: 16,
  },
  labHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  labIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  labTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  labSubtitle: {
    color: '#6C5CE7',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  dashboardHeader: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#E0E0E0',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  legendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  legendItem: {
    color: '#6B6B80',
    fontSize: 11,
  },
  bottomSpacer: {
    height: 40,
  },
});
