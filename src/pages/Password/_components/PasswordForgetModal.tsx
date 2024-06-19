import theme from '@/theme';
import Modal from '@/components/Modal';
import { View, Text } from 'react-native';
import CustomButton from '@/components/CustomButton';

const PasswordForgetModal = (props: any) => {
  const { passwordResetModal, setPasswordResetModal, navigation } = props;

  return (
    <Modal
      isModalState={passwordResetModal}
      setIsModalState={setPasswordResetModal}>
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
            비밀번호를 재설정 하시겠습니까?
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
              navigation.navigate('PasswordReset');
              setPasswordResetModal(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PasswordForgetModal;
