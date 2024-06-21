import theme from '@/theme';
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import { Alert, Image } from 'react-native';
import styled from 'styled-components/native';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { alert } from 'public/assets/images/icons/common';
import { LoginScreenNavigationProp } from '@/types/navigation';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

export const useBiometrics = () => {
  const [isModalState, setIsModalState] = useState(false);

  // ios, android 생체인증 가능여부
  const rnBiometrics = new ReactNativeBiometrics();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleNavigateBtn = () => {
    navigation.navigate('Bottom');
  };

  // 생체 인식 가능 여부
  const booleanBiometricCheck = () => {
    return rnBiometrics
      .isSensorAvailable()
      .then(resultObject => {
        const { available, biometryType } = resultObject;
        if (available && biometryType === BiometryTypes.TouchID) {
          return { result: true, type: biometryType };
        } else if (available && biometryType === BiometryTypes.FaceID) {
          return { result: true, type: biometryType };
        } else if (available && biometryType === BiometryTypes.Biometrics) {
          return { result: true, type: biometryType };
        } else {
          return { result: false, type: null };
        }
      })
      .catch(() => {
        return { result: false, type: null };
      });
  };

  // 키생성, 새로운 기기 등록시에도 생체인증 재등록해서 키 쌍 등록해야함.
  // 서버에서는 공개키 업데이트하는 api 하나 만들어야 할듯.
  const createKey = () => {
    return rnBiometrics
      .createKeys()
      .then(resultObject => {
        const { publicKey } = resultObject;

        console.log('resultObject', resultObject);
        console.log('publicKey', publicKey.length);

        // 여기서 서버로 공개키 전송해야함
        Alert.alert('공개키', `${publicKey}`);

        return { result: true, key: publicKey };
      })
      .catch(() => {
        return { result: false, key: null };
      });
  };

  // 키 존재여부
  const checkKey = () => {
    return rnBiometrics
      .biometricKeysExist()
      .then(resultObject => {
        const { keysExist } = resultObject;
        if (keysExist) {
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  };

  // 키 삭제
  const deleteKey = () => {
    return rnBiometrics
      .deleteKeys()
      .then(resultObject => {
        const { keysDeleted } = resultObject;

        if (keysDeleted) {
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  };

  // 값 확인
  const payload = '서버에서 받은 페이로드';
  const biometricLogin = (
    userID: string = '',
    msg: string = '로그인을 위해 서명 생성',
  ) => {
    return rnBiometrics
      .createSignature({
        // createSignature 함수가 비공개 키 사용해서 payload에 서명을 생성함.
        promptMessage: msg,
        // payload: userID,
        payload: payload,
      })
      .then(resultObject => {
        const { success, signature } = resultObject;
        if (success) {
          // 생성된 서명을 서버로 전송
          return { result: true, key: signature };
        } else {
          // 서명 생성 실패
          return { result: false, key: null };
        }
      })
      .catch(error => {
        console.log(error);
        return { result: false, key: null, msg: error };
      });
  };

  const _handleCreateAuth = async () => {
    // const token = await messaging().getToken()
    const keyCreate = await createKey();
    if (keyCreate?.result) {
      const biometricCheck = await booleanBiometricCheck();
      if (biometricCheck?.result) {
        const bioKey = await biometricLogin('test123', '등록');

        if (bioKey?.key) {
          // Alert.alert(
          //   '',
          //   `생체인증이 성공적으로 등록되었습니다. ${bioKey?.key}`,
          //   [
          //     {
          //       text: '확인',
          //       onPress: handleNavigateBtn,
          //     },
          //   ],
          // );
        } else {
          Alert.alert('알림', '생체인식 사용불가 또는 등록되어있지 않음.');
        }
      }
    } else {
      Alert.alert('click!', `${keyCreate}`);
      Alert.alert('알림', '생체인식 사용 불가');
    }
  };

  const _handleLoginBiometric = async () => {
    const token = 'test123';
    const biometricCheck = await booleanBiometricCheck();
    console.log('biometricCheck', biometricCheck);
    if (biometricCheck?.result) {
      try {
        const bioKey = await biometricLogin('test123', '로그인');
        if (bioKey?.result) {
          return handleNavigateBtn();
        }
        setIsModalState(true);
      } catch (error) {}
    }
  };

  const NotAvailableBiometricModal = () => {
    return (
      <Modal isModalState={isModalState} setIsModalState={setIsModalState}>
        <ModalContentView>
          <Image source={alert} style={{ marginTop: 26 }} />
          <ModalTitle>생체인증을 확인해주세요</ModalTitle>
          <ModalDescription>
            권한 또는 인증 시도 제한으로 생체인증을 진행할 수 없어요. 휴대폰에
            등록된 정보를 다시 한번 확인해주세요.
          </ModalDescription>
          <CustomButtonView>
            <CustomButton
              text="확인"
              backgroundColor={theme.colors.c2e_gray_03}
              color={theme.colors.c2e_gray_02}
              onPress={() => setIsModalState(false)}
              fontWeight={800}
            />
          </CustomButtonView>
        </ModalContentView>
      </Modal>
    );
  };

  return {
    _handleCreateAuth,
    _handleLoginBiometric,
    checkKey,
    NotAvailableBiometricModal,
  };
};

const ModalContentView = styled.View`
  justify-content: center;
  align-items: center;
`;

const ModalTitle = styled.Text`
  margin: 14px 0 14px 0;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.c2e_gray_01};
  font-weight: 500;
`;

const ModalDescription = styled.Text`
  margin: 0 59px 0 59px;
  margin-bottom: 26px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.c2e_gray_01};
  text-align: center;
  line-height: 20px;
`;

const CustomButtonView = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 15px 0 15px;
`;
