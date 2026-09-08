/**
 * generateData.ts
 *
 * Utility functions for generating test datasets.
 * Used across multiple experiments (FlatList, List Item, Images).
 *
 * All data is deterministic and locally generated —
 * no dependency on network or external APIs.
 */

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  category: string;
  rating: number;
  inStock: boolean;
}

/**
 * Generate a deterministic array of product items.
 *
 * @param count - Number of items to generate
 * @returns Array of ProductItem objects
 */
export function generateProducts(count: number): ProductItem[] {
  const categories = [
    'Electronics',
    'Clothing',
    'Home',
    'Sports',
    'Books',
    'Food',
    'Toys',
    'Tools',
  ];

  return Array.from({length: count}, (_, index) => ({
    id: `product-${index}`,
    title: `Product ${index + 1}`,
    subtitle: `Description for product ${index + 1}. This is a test item.`,
    price: Math.round((10 + (index * 7.3) % 490) * 100) / 100,
    category: categories[index % categories.length],
    rating: Math.round((1 + (index * 3.7) % 4) * 10) / 10,
    inStock: index % 3 !== 0,
  }));
}

/**
 * Generate a large dataset for FlatList experiments.
 * Uses generateProducts internally.
 *
 * @param count - Number of items (default: 5000)
 * @returns Array of ProductItem objects
 */
export function generateLargeDataset(count: number = 5000): ProductItem[] {
  return generateProducts(count);
}
