import theme from '@/theme';
import { LoginScreenNavigationProp } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

export const handleValueChange = (
  password: any,
  setPassword: any,
  value: any,
  reconfirmPassword: any,
  setReconfirmPassword: any,
  setPasscode: any,
  passwordState: string,
) => {
  if (
    passwordState === 'PASSCODE_LOGIN' ||
    passwordState === 'PASSCODE_NOT_CORRECT'
  ) {
    setPasscode(value);
  } else {
    if (passwordState === 'PASSCODE_SIGNUP') {
      if (password.length < 6) {
        setPassword(value);
      }
    } else if (passwordState === 'SIGNUP_PASSCODE_RECONFIRM') {
      if (reconfirmPassword?.length < 6) {
        setReconfirmPassword(value);
      }
    }
  }
};

export const renderCircles = (password: any) => {
  const circles = [];
  for (let i = 0; i < 6; i++) {
    circles.push(
      <View
        key={i}
        style={[
          styles.circle,
          {
            backgroundColor:
              i < password.length
                ? theme.colors.c2e_blue_02
                : theme.colors.c2e_gray_03,
          },
        ]}
      />,
    );
  }
  return circles;
};

export const handlePasswordResetBtn = (setPasswordResetModal: any) => {
  setPasswordResetModal(true);
};

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'gray',
  },
});
