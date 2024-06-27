import React from 'react';
import Login from '@/pages/Login';
import Nickname from '@/pages/Nickname';
import Password from '@/pages/Password';
import TermsAndUse from '@/pages/TermsAndUse';
import PasswordReset from '@/pages/PasswordReset';
import { createStackNavigator } from '@react-navigation/stack';
import BiometricAuthConfirm from '@/pages/BiometricAuthConfirm';

const Stack = createStackNavigator();

const LoginStack = () => {
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
