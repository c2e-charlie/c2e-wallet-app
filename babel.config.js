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
      },
    ],
    // 추가된 플러그인들
    [
      '@babel/plugin-transform-private-methods',
      { loose: true }, // 모두 동일한 'loose' 모드로 설정
    ],
    [
      '@babel/plugin-transform-private-property-in-object',
      { loose: true }, // 모두 동일한 'loose' 모드로 설정
    ],
  ],
};
