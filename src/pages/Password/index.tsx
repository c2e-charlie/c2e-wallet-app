import { useEffect, useState } from 'react';
import { PasswordContainer } from './index.styled';
import { useBiometrics } from '@/hooks/useBiometrics';
import { handlePasswordResetBtn } from './index.utils';
import { useNavigation } from '@react-navigation/native';
import PasswordContent from './_components/PasswordContent';
import { LoginScreenNavigationProp } from '@/types/navigation';
import PasswordForgetModal from './_components/PasswordForgetModal';
import PasswordFailureModal from './_components/PasswordFailureModal';

const Password = (props: any) => {
  const type = props?.type || props?.route?.params?.type;
  // type : 'signup' || 'login' || 'reset'
  const serverSavedPasscode = '111111'; // 임의 값

  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [reconfirmPassword, setReconfirmPassword] = useState('');
  const [passcode, setPasscode] = useState('');
  const [checkPasscode, setCheckPasscode] = useState(false);
  const [passwordState, setPasswordState] = useState(() => {
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
  const [failureCount, setFailureCount] = useState(0);
  const [isModalState, setIsModalState] = useState(false);
  const [passwordResetModal, setPasswordResetModal] = useState(false);
  const maxFailureCount = 5;

  const { checkKey, _handleLoginBiometric, NotAvailableBiometricModal } =
    useBiometrics();

  useEffect(() => {
    const checkAndLoginBiometrics = async () => {
      const keyExists = await checkKey();
      if (keyExists) {
        console.log('checkKey', keyExists);
        await _handleLoginBiometric();
      }
    };

    checkAndLoginBiometrics();
  }, []);

  // 회원가입 : SIGNUP_PASSCODE
  // 패스코드 한번 더 입력 : SIGNUP_PASSCODE_RECONFIRM
  // 패스코드 로그인 : PASSCODE_LOGIN
  // 페이스아이디 로그인 : FACEID_LOGIN
  // 가입한 유저 비번 틀렸을때 : PASSCODE_NOT_CORRECT
  // 가입한 유저 비번 맞음 : PASSCODE_CORRECT
  // 패스코드 재설정 : PASSCODE_RESET 작업 진행중

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
    if (passcode.length === 6) {
      if (passcode === serverSavedPasscode) {
        setCheckPasscode(false);
        // setPasswordState('PASSCODE_CORRECT');
        navigation.navigate('BottomNavigator');
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
            password={password}
            setPassword={setPassword}
            checkPassword={checkPassword}
            reconfirmPassword={reconfirmPassword}
            setReconfirmPassword={setReconfirmPassword}
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

        {/* <NotAvailableBiometricModal /> */}
      </>
    );
  }

  if (type === 'reset') {
    return (
      <PasswordContainer>
        <PasswordContent />
      </PasswordContainer>
    );
  }
};

export default Password;