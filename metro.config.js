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
    extraNodeModules: {
      assert: require.resolve('empty-module'), // assert can be polyfilled here if needed
      http: require.resolve('empty-module'), // stream-http can be polyfilled here if needed
      https: require.resolve('empty-module'), // https-browserify can be polyfilled here if needed
      os: require.resolve('empty-module'), // os-browserify can be polyfilled here if needed
      url: require.resolve('empty-module'), // url can be polyfilled here if needed
      zlib: require.resolve('empty-module'), // browserify-zlib can be polyfilled here if needed
      path: require.resolve('empty-module'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('readable-stream'),
    },
    ...defaultConfig.resolver,
  },
};

module.exports = mergeConfig(defaultConfig, config);
