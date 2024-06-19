import {
  Title,
  AlertText,
  PasswordView,
  RandomKeyPadView,
  RenderCellContent,
  PasswordAlertView,
  RenderCellContainer,
  PasswordUpperSection,
  FailureCountText,
} from '../index.styled';
import theme from '@/theme';
import { Text, TouchableOpacity } from 'react-native';
import RandomKeyPad from '@/components/KeyPad/RandomPad';
import { handleValueChange, renderCircles } from '../index.utils';

const PasswordContent = (props: any) => {
  const {
    type,
    password,
    setPassword,
    checkPassword,
    reconfirmPassword,
    setReconfirmPassword,
    passcode,
    setPasscode,
    passwordState,
    checkPasscode,
    failureCount,
    maxFailureCount,
    handlePasswordResetBtn,
  } = props;

  return (
    <PasswordView>
      <PasswordUpperSection>
        {passwordState === 'SIGNUP_PASSCODE_RECONFIRM' ? (
          <>
            <Title>간편 비밀번호를</Title>
            <Title>한번 더 입력해주세요</Title>
          </>
        ) : passwordState === 'PASSCODE_LOGIN' ? (
          <Title>비밀번호 입력</Title>
        ) : passwordState === 'PASSCODE_NOT_CORRECT' ? (
          <>
            <Title>비밀번호가 맞지 않아요</Title>
            <Title>
              다시 입력해주세요{'  '}
              <FailureCountText>
                {failureCount}/{maxFailureCount}
              </FailureCountText>
            </Title>
          </>
        ) : (
          <>
            <Title>간편 비밀번호를</Title>
            <Title>설정해주세요</Title>
          </>
        )}

        <RenderCellContainer>
          <RenderCellContent>
            {renderCircles(
              passwordState === 'SIGNUP_PASSCODE_RECONFIRM'
                ? reconfirmPassword
                : passwordState === 'PASSCODE_LOGIN' ||
                  passwordState === 'PASSCODE_NOT_CORRECT'
                ? passcode
                : password,
            )}
          </RenderCellContent>

          <PasswordAlertView checkPassword={checkPassword}>
            <AlertText>비밀번호가 일치하지 않습니다</AlertText>
          </PasswordAlertView>

          <PasswordAlertView checkPassword={checkPasscode}>
            <AlertText>총 5회 입력 실패 시</AlertText>
            <AlertText>비밀번호 재설정이 진행됩니다.</AlertText>
          </PasswordAlertView>
        </RenderCellContainer>
      </PasswordUpperSection>

      <RandomKeyPadView>
        <RandomKeyPad
          onValueChange={value =>
            handleValueChange(
              password,
              setPassword,
              value,
              reconfirmPassword,
              setReconfirmPassword,
              setPasscode,
              passwordState,
            )
          }
        />
        {type === 'login' && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePasswordResetBtn}>
            <Text
              style={{
                marginBottom: 10,
                fontSize: 14,
                fontWeight: 700,
                color: theme.colors.c2e_gray_02,
              }}>
              비밀번호를 잊으셨나요?
            </Text>
          </TouchableOpacity>
        )}
      </RandomKeyPadView>
    </PasswordView>
  );
};

export default PasswordContent;
