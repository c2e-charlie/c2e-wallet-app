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
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
    // This detects entry points of React app and transforms them
    // For the other files this will switch to use default `metro-react-native-babel-transformer` for transforming
    babelTransformerPath: require.resolve(
      'react-native-react-bridge/lib/plugin',
    ),
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
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
    assetExts: ['svg', 'png', 'json'],
    sourceExts: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx'],
    ...defaultConfig.resolver,
  },
};

module.exports = mergeConfig(defaultConfig, config);
