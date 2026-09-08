/**
 * expensiveModule.ts
 *
 * This module intentionally performs heavy synchronous work
 * AT IMPORT TIME.
 *
 * This simulates a common React Native anti-pattern where
 * heavy initialization or data transformation is placed at the
 * top level of a file, blocking the JS thread during startup
 * before any UI can be rendered.
 */

import { PerformanceMarker } from '../../performance/PerformanceMarker';

PerformanceMarker.begin('MODULE_INIT');

console.log('🚨 [APP STARTUP] expensiveModule.ts is executing its 100,000 object sort RIGHT NOW! 🚨');

function createLargeDataStructure() {
  const data = [];
  // Create 500,000 objects to stress memory and CPU
  for (let i = 0; i < 1000000; i++) {
    data.push({
      id: i,
      value: `Item ${i}`,
      nested: {
        timestamp: Date.now(),
        random: Math.random(),
      },
    });
  }
  return data;
}

function expensiveTransform(data: any[]) {
  // Sort the large array MULTIPLE TIMES to burn serious CPU cycles
  let sorted = data.sort((a, b) => b.nested.random - a.nested.random);
  sorted = sorted.sort((a, b) => a.id - b.id);
  sorted = sorted.sort((a, b) => b.nested.timestamp - a.nested.timestamp);
  return sorted;
}

// ⚠️ This runs synchronously when the module is imported!
const rawData = createLargeDataStructure();
const processedData = expensiveTransform(rawData);

PerformanceMarker.end('MODULE_INIT');

export const ExpensiveModule = {
  getData: () => processedData,
  count: processedData.length,
};
