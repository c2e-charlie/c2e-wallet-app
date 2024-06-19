import React from 'react';
import theme from '@/theme';
import { View, Text } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { google_icon } from 'public/assets/images/icons/login';
import { LoginScreenNavigationProp } from '@/types/navigation';

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
        paddingTop: 70,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 800, fontSize: 24 }}>
          <Text
            style={{
              color: theme.colors.c2e_white_01,
              fontWeight: 800,
              fontSize: 24,
            }}>
            커뮤니티
          </Text>
          가 소득이 되는
        </Text>
        <Text style={{ fontWeight: 800, fontSize: 24, paddingTop: 10 }}>
          체인위드 지갑
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 30,
          marginBottom: 60,
          alignItems: 'center',
        }}>
        <Text style={{ marginBottom: 20, fontWeight: 700, fontSize: 14 }}>
          회원가입하고 10P 받기!
        </Text>
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
