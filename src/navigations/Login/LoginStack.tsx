import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Nickname from '@/pages/Nickname';
import Password from '@/pages/Password';
import BiometricAuthConfirm from '@/pages/BiometricAuthConfirm';
import TermsAndUse from '@/pages/TermsAndUse';
import Login from '@/pages/Login';
import PasswordReset from '@/pages/PasswordReset';

const Stack = createStackNavigator();

const LoginStack = () => {
  const forFade = ({ current }: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const userToken = '';

  const LoginPasswordWrapper = () => {
    return <Password type="login" />;
  };

  return (
    <Stack.Navigator>
      {userToken ? (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginPasswordWrapper}
        />
      ) : (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={Login}
        />
      )}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PasswordReset"
        component={PasswordReset}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Nickname"
        component={Nickname}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TermsAndUse"
        component={TermsAndUse}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Password"
        component={Password}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BiometricAuthConfirm"
        component={BiometricAuthConfirm}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
