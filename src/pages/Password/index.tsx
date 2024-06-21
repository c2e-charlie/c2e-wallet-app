import React, { useEffect, useState } from 'react';
import { PasswordStateType } from './index.types';
import { PasswordContainer } from './index.styled';
import { useBiometrics } from '@/hooks/useBiometrics';
import { handlePasswordResetBtn } from './index.utils';
import { useNavigation } from '@react-navigation/native';
import PasswordContent from './_components/PasswordContent';
import { LoginScreenNavigationProp } from '@/types/navigation';
import PasswordForgetModal from './_components/PasswordForgetModal';
import PasswordFailureModal from './_components/PasswordFailureModal';
import PasswordResetSuccessModal from './_components/PasswordResetSuccessModal';

const Password = (props: any) => {
  const type = props?.type || props?.route?.params?.type;
  // type : 'signup' || 'login' || 'reset'
  const serverSavedPasscode = '111111'; // 임의 값

  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [reconfirmPassword, setReconfirmPassword] = useState<string>('');
  const [passcode, setPasscode] = useState<string>('');
  const [checkPasscode, setCheckPasscode] = useState<boolean>(false);
  const [passwordState, setPasswordState] = useState<PasswordStateType>(() => {
    switch (type) {
      case 'signup':
        return 'PASSCODE_SIGNUP';
      case 'login':
        return 'PASSCODE_LOGIN';
      case 'reset':
        return 'PASSCODE_RESET';
      default:
        return '';
    }
  });
  const [failureCount, setFailureCount] = useState<number>(0);
  const [isModalState, setIsModalState] = useState<boolean>(false);
  const [passwordResetModal, setPasswordResetModal] = useState<boolean>(false);
  const [passwordResetSuccess, setPasswordResetSuccess] =
    useState<boolean>(false);

  // password reset
  const [resetPassword, setResetPassword] = useState('');
  const [reconfirmResetPassword, setReconfirmResetPassword] = useState('');

  const maxFailureCount = 5;

  const {
    checkKey,
    _handleLoginBiometric,
    NotAvailableBiometricModal,
    _handleCreateAuth,
  } = useBiometrics();

  useEffect(() => {
    const checkAndLoginBiometrics = async () => {
      const keyExists = await checkKey();
      if (keyExists && type === 'login') {
        console.log('checkKey', keyExists);

        await _handleCreateAuth();
      }
    };

    checkAndLoginBiometrics();
  }, []);

  // 회원가입 : PASSCODE_SIGNUP
  // 패스코드 한번 더 입력 : SIGNUP_PASSCODE_RECONFIRM
  // 패스코드 로그인 : PASSCODE_LOGIN
  // 가입한 유저 비번 틀렸을때 : PASSCODE_NOT_CORRECT
  // 가입한 유저 비번 맞음 : PASSCODE_CORRECT
  // 패스코드 재설정 : PASSCODE_RESET
  // 패스코드 확인 : PASSCODE_RESET_RECONFIRM

  const navigation = useNavigation<LoginScreenNavigationProp>();

  useEffect(() => {
    if (password.length === 6) {
      setPasswordState('SIGNUP_PASSCODE_RECONFIRM');
    }
  }, [password]);

  useEffect(() => {
    if (
      reconfirmPassword.length === 6 &&
      passwordState === 'SIGNUP_PASSCODE_RECONFIRM'
    ) {
      if (password === reconfirmPassword) {
        setCheckPassword(false);
        navigation.navigate('BiometricAuthConfirm');
      } else {
        setReconfirmPassword('');
        setCheckPassword(true);
      }
    }
  }, [reconfirmPassword]);

  useEffect(() => {
    if (resetPassword.length === 6) {
      setPasswordState('PASSCODE_RESET_RECONFIRM');
    }
  }, [resetPassword]);

  useEffect(() => {
    if (
      reconfirmResetPassword.length === 6 &&
      passwordState === 'PASSCODE_RESET_RECONFIRM'
    ) {
      if (resetPassword === reconfirmResetPassword) {
        setCheckPassword(false);
        setPasswordResetSuccess(true);
      } else {
        setReconfirmResetPassword('');
        setCheckPassword(true);
      }
    }
  }, [reconfirmResetPassword]);

  useEffect(() => {
    if (passcode.length === 6) {
      if (passcode === serverSavedPasscode) {
        setCheckPasscode(false);
        navigation.navigate('Bottom');
      } else {
        setPasscode('');
        setCheckPasscode(true);
        setPasswordState('PASSCODE_NOT_CORRECT');
        setFailureCount((count: number) => {
          return count + 1;
        });

        if (failureCount === maxFailureCount - 1) {
          setIsModalState(true);
        }
      }
    }
  }, [passcode]);

  if (type === 'signup') {
    return (
      <PasswordContainer>
        {passwordState === 'PASSCODE_SIGNUP' ? (
          <PasswordContent
            password={password}
            setPassword={setPassword}
            checkPassword={checkPassword}
            reconfirmPassword={reconfirmPassword}
            setReconfirmPassword={setReconfirmPassword}
            passwordState={passwordState}
          />
        ) : (
          <PasswordContent
            password={password}
            setPassword={setPassword}
            checkPassword={checkPassword}
            reconfirmPassword={reconfirmPassword}
            setReconfirmPassword={setReconfirmPassword}
            passwordState={passwordState}
          />
        )}
      </PasswordContainer>
    );
  }

  if (type === 'login') {
    return (
      <>
        <PasswordContainer>
          <PasswordContent
            type={type}
            passcode={passcode}
            setPasscode={setPasscode}
            checkPassword={checkPassword}
            passwordState={passwordState}
            checkPasscode={checkPasscode}
            failureCount={failureCount}
            setFailureCount={setFailureCount}
            maxFailureCount={maxFailureCount}
            handlePasswordResetBtn={() =>
              handlePasswordResetBtn(setPasswordResetModal)
            }
          />
        </PasswordContainer>
        {isModalState && (
          <PasswordFailureModal
            isModalState={isModalState}
            setIsModalState={setIsModalState}
          />
        )}
        {passwordResetModal && (
          <PasswordForgetModal
            navigation={navigation}
            passwordResetModal={passwordResetModal}
            setPasswordResetModal={setPasswordResetModal}
          />
        )}

        <NotAvailableBiometricModal />
      </>
    );
  }

  if (type === 'reset') {
    return (
      <>
        <PasswordContainer>
          <PasswordContent
            passwordState={passwordState}
            resetPassword={resetPassword}
            checkPassword={checkPassword}
            setResetPassword={setResetPassword}
            reconfirmResetPassword={reconfirmResetPassword}
            setReconfirmResetPassword={setReconfirmResetPassword}
          />
        </PasswordContainer>
        {passwordResetSuccess && (
          <PasswordResetSuccessModal
            navigation={navigation}
            passwordResetSuccess={passwordResetSuccess}
            setPasswordResetSuccess={setPasswordResetSuccess}
          />
        )}
      </>
    );
  }
};

export default Password;
