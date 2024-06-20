import theme from '@/theme';
import Modal from '@/components/Modal';
import { View, Text } from 'react-native';
import CustomButton from '@/components/CustomButton';
import React from 'react';

const PasswordResetSuccessModal = (props: any) => {
  const { passwordResetSuccess, setPasswordResetSuccess, navigation } = props;

  return (
    <Modal
      isModalState={passwordResetSuccess}
      setIsModalState={setPasswordResetSuccess}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <View style={{ marginBottom: 30, marginTop: 38 }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: 700,
              color: theme.colors.c2e_gray_01,
              textAlign: 'center',
            }}>
            체인위드 월렛 비밀번호가 설정되었습니다.
          </Text>
        </View>

        <View style={{ width: '100%', marginBottom: 20 }}>
          <CustomButton
            text="확인"
            fullWidth
            fontWeight={800}
            backgroundColor={theme.colors.c2e_gray_03}
            color={theme.colors.c2e_gray_02}
            onPress={() => {
              navigation.navigate('BiometricAuthConfirm');
              setPasswordResetSuccess(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PasswordResetSuccessModal;
