import {
  BaseToast,
  ErrorToast,
  ToastConfigParams,
} from 'react-native-toast-message';
import theme from '@/theme';
import { View, Text } from 'react-native';
import React from 'react';

export const SnackbarConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  error_02: ({ text1, props }: ToastConfigParams<any>) => (
    <View
      style={{
        height: 40,
        width: 190,
        backgroundColor: '#00000080',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 15,
          color: theme.colors.textInverse,
          fontWeight: 700,
        }}>
        {text1}
      </Text>
    </View>
  ),
};
