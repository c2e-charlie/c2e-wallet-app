/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import theme from '@/theme';
import { View, Text, Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '@/types/navigation';
import { google_icon, speech_bubble } from 'public/assets/images/icons/login';
import CustomCarousel from '@/components/CustomCarousel';

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleGoogleLoginBtn = () => {
    navigation.replace('Nickname');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.c2e_blue_01,
        flexDirection: 'column',
      }}>
      <CustomCarousel />

      <View
        style={{
          marginHorizontal: 30,
        }}>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8.5,
          }}>
          <Image source={speech_bubble} resizeMode="contain" />
          <Text
            style={{
              fontWeight: 800,
              fontSize: 14,
              position: 'absolute',
              paddingBottom: 6,
              color: theme.colors.c2e_white_01,
            }}>
            회원가입하고 10P 받기!
          </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <CustomButton
            shadow
            onPress={handleGoogleLoginBtn}
            text="구글로 로그인하기"
            startIcon={google_icon}
            fullWidth
            backgroundColor={theme.colors.disableButton}
            color={theme.colors.c2e_gray_01}
            fontWeight={700}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
