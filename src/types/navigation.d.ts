// @/types/navigation.d.ts
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  BottomNavigator: undefined;
  Login: undefined;
  Nickname: undefined;
  Password: { type: string } | undefined;
  BiometricAuthConfirm: undefined;
  TermsAndUse: undefined;
  PasswordReset: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type SignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type BottomNavigatorScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'BottomNavigator'
>;
