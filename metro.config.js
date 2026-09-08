const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        // ⚠️ DISABLED for Experiment 01 — App Startup Time
        // When false, all static imports are loaded eagerly at app boot,
        // simulating the real-world anti-pattern of heavy module initialization
        // blocking the Home Screen from rendering.
        // Set back to true after the experiment to restore the default optimization.
        inlineRequires: false,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
