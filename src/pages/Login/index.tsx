/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import theme from '@/theme';
import { View, Text, Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '@/types/navigation';
import { google_icon, speech_bubble } from 'public/assets/images/icons/login';

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
        paddingTop: 300,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 800, fontSize: 40, paddingTop: 10 }}>
          REWARDY
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 30,
          marginBottom: 60,
          alignItems: 'center',
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
  );
};

export default Login;
