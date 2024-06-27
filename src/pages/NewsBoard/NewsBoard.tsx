import React from 'react';
import theme from '@/theme';
import { Text, View } from 'react-native';

const NewsBoard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}>
      <Text>뉴스 게시판</Text>
    </View>
  );
};

export default NewsBoard;
