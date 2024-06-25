import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from '@/pages/Wallet';
import Send from '@/pages/Send';
import SendAdress from '@/pages/SendAdress';
import Confirm from '@/pages/Confirm';
import QrScanner from '@/pages/QrScanner';
import QrAddress from '@/pages/QrAddress';
import TokenDetail from '@/pages/TokenDetail';

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
      <Stack.Screen name="Confirm" component={Confirm} />
      <Stack.Screen name="QrScanner" component={QrScanner} />
      <Stack.Screen name="QrAddress" component={QrAddress} />
      <Stack.Screen name="TokenDetail" component={TokenDetail} />
    </Stack.Navigator>
  );
};

export default WalletStack;
