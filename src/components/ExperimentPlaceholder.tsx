/**
 * ExperimentPlaceholder.tsx
 *
 * A placeholder screen for experiments that haven't been implemented yet.
 * Shows the experiment number, title, and a message that implementation is pending.
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ExperimentPlaceholderProps {
  experimentNumber: string;
  title: string;
  description: string;
}

export const ExperimentPlaceholder: React.FC<ExperimentPlaceholderProps> = ({
  experimentNumber,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Experiment {experimentNumber}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.pendingBox}>
        <Text style={styles.pendingIcon}>🚧</Text>
        <Text style={styles.pendingText}>Implementation pending</Text>
        <Text style={styles.pendingSubtext}>
          This experiment will be built when you reach this phase in the lab.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131A',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#6C5CE7',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    color: '#E0E0E0',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: '#8888AA',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  pendingBox: {
    backgroundColor: '#1E1E2E',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D2D3F',
    borderStyle: 'dashed',
  },
  pendingIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  pendingText: {
    color: '#A0A0B8',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  pendingSubtext: {
    color: '#6B6B80',
    fontSize: 12,
    textAlign: 'center',
  },
});
