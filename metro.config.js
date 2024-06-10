const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
    },
    ...defaultConfig.resolver,
  },
};

module.exports = mergeConfig(defaultConfig, config);
