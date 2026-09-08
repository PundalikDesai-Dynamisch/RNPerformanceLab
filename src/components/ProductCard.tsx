/**
 * ProductCard.tsx
 *
 * A reusable product card component used in:
 * - Experiment 02 (Unnecessary Re-renders)
 * - Experiment 05 (Expensive List Item Rendering)
 *
 * Will be implemented with intentional performance problems
 * when those experiments are built.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ProductItem} from '../utils/generateData';

interface ProductCardProps {
  product: ProductItem;
  onPress?: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({product, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(product)}
      activeOpacity={0.7}>
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.subtitle}>{product.subtitle}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.rating}>★ {product.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E2E',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#2D2D3F',
  },
  content: {
    gap: 6,
  },
  title: {
    color: '#E0E0E0',
    fontSize: 15,
    fontWeight: '600',
  },
  subtitle: {
    color: '#8888AA',
    fontSize: 12,
    lineHeight: 16,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  price: {
    color: '#6C5CE7',
    fontSize: 14,
    fontWeight: '700',
  },
  category: {
    color: '#6B6B80',
    fontSize: 12,
  },
  rating: {
    color: '#F9CA24',
    fontSize: 12,
  },
});
