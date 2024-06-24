import theme from '@/theme';
import React from 'react';
import { View, Text } from 'react-native';

const InfoBoard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}>
      <Text>Info Board</Text>
    </View>
  );
};

export default InfoBoard;
