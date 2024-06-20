import theme from '@/theme';
import {
  faceid_icon_02,
  faceid_icon_bg_02,
  finger_print_icon,
} from 'public/assets/images/icons/login';
import { View, Text, Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { useBiometrics } from '@/hooks/useBiometrics';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '@/types/navigation';
import React from 'react';

const BiometricAuthConfirm = () => {
  const { _handleCreateAuth, _handleLoginBiometric } = useBiometrics();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleNextBtn = () => {
    navigation.navigate('Bottom');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.c2e_white_01,
        alignItems: 'center',
      }}>
      <View
        style={{ justifyContent: 'center', flex: 0.9, alignItems: 'center' }}>
        <View style={{ marginBottom: 54 }}>
          <Image source={finger_print_icon} />

          <View style={{ position: 'absolute', left: 62, top: 30 }}>
            <Image source={faceid_icon_bg_02} />
            <View style={{ position: 'absolute', left: 26, bottom: 24 }}>
              <Image source={faceid_icon_02} />
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
          생체인증 활성화
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: theme.colors.c2e_gray_04,
            lineHeight: 22,
          }}>
          휴대폰에 등록 되어있는 생체정보로
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: theme.colors.c2e_gray_04,
            lineHeight: 22,
          }}>
          체인위드 지갑을 이용할 수 있습니다
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flex: 0.1 }}>
        <View style={{ flex: 0.4, marginLeft: 20, marginRight: 10 }}>
          <CustomButton
            text="다음에"
            backgroundColor={theme.colors.c2e_gray_03}
            color={theme.colors.c2e_gray_02}
            fontWeight={800}
            onPress={handleNextBtn}
          />
        </View>
        <View style={{ flex: 0.6, marginRight: 20 }}>
          <CustomButton
            text="사용하기"
            color={theme.colors.c2e_white_01}
            fontWeight={800}
            onPress={_handleCreateAuth}
            gradientColors={['#1BE0CD', '#47C8FC']}
          />
        </View>
      </View>
    </View>
  );
};

export default BiometricAuthConfirm;
