import theme from '@/theme';
import Modal from '@/components/Modal';
import { View, Text, Image } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { alert } from 'public/assets/images/icons/common';
import React from 'react';

const PasswordFailureModal = (props: any) => {
  const { isModalState, setIsModalState } = props;

  return (
    <Modal isModalState={isModalState} setIsModalState={setIsModalState}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <Image source={alert} style={{ marginTop: 26 }} />
        <View style={{ marginBottom: 24, marginTop: 14 }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 22,
              fontWeight: 700,
              color: theme.colors.c2e_gray_01,
              textAlign: 'center',
            }}>
            비밀번호 5회 입력 실패입니다.
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 22,
              fontWeight: 700,
              color: theme.colors.c2e_gray_01,
              textAlign: 'center',
            }}>
            본인인증 후 재설정이 필요해요.
          </Text>
        </View>

        <View style={{ width: '100%', marginBottom: 20 }}>
          <CustomButton
            text="확인"
            fullWidth
            fontWeight={800}
            backgroundColor={theme.colors.c2e_gray_03}
            color={theme.colors.c2e_gray_02}
            onPress={() => setIsModalState(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PasswordFailureModal;
