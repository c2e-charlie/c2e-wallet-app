module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          public: './public',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
      },
    ],

    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['react-native-reanimated/plugin'],
  ],
};
