/**
 * ExperimentCard.tsx
 *
 * A card component displayed on the Home Screen for each experiment.
 *
 * Shows:
 * - Experiment number and title
 * - What concept it teaches
 * - Intended profiler tool
 * - Current status: ⬜ Not started / 🟡 Profiled / 🔵 Root cause found / 🟢 Fixed
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  ExperimentStatus,
  ExperimentStatusEmoji,
  ExperimentStatusLabel,
} from '../performance/PerformanceLabConfig';

export interface ExperimentCardProps {
  experimentNumber: string;
  title: string;
  concept: string;
  profiler: string;
  status: ExperimentStatus;
  onPress: () => void;
}

export const ExperimentCard: React.FC<ExperimentCardProps> = ({
  experimentNumber,
  title,
  concept,
  profiler,
  status,
  onPress,
}) => {
  const statusEmoji = ExperimentStatusEmoji[status];
  const statusLabel = ExperimentStatusLabel[status];

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.header}>
        <View style={styles.numberBadge}>
          <Text style={styles.numberText}>{experimentNumber}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.concept}>{concept}</Text>

      <View style={styles.footer}>
        <View style={styles.profilerTag}>
          <Text style={styles.profilerIcon}>🔍</Text>
          <Text style={styles.profilerText}>{profiler}</Text>
        </View>
        <View style={styles.statusTag}>
          <Text style={styles.statusEmoji}>{statusEmoji}</Text>
          <Text style={styles.statusText}>{statusLabel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E2E',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#2D2D3F',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  numberBadge: {
    backgroundColor: '#6C5CE7',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },
  numberText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  concept: {
    color: '#A0A0B8',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2D3F',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  profilerIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  profilerText: {
    color: '#8888AA',
    fontSize: 11,
  },
  statusTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusEmoji: {
    fontSize: 14,
    marginRight: 4,
  },
  statusText: {
    color: '#8888AA',
    fontSize: 12,
  },
});
