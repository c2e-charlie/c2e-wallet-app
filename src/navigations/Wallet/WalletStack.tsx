import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from '@/pages/Wallet';
import Send from '@/pages/Send';
import SendAdress from '@/pages/SendAdress';

const Stack = createNativeStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Send" component={Send} />
      <Stack.Screen name="SendAdress" component={SendAdress} />
    </Stack.Navigator>
  );
};

export default WalletStack;
