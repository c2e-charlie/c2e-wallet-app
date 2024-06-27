import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from '@/pages/Wallet';
import Send from '@/pages/Send';
import Confirm from '@/pages/Confirm';
import QrScanner from '@/pages/QrScanner';
import QrAddress from '@/pages/QrAddress';
import TokenDetail from '@/pages/TokenDetail';
import History from '@/pages/History';
import HistoryDetail from '@/pages/HistoryDetail';
import SendAddress from '@/pages/SendAddress';

const Stack = createNativeStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Send" component={Send} />
      <Stack.Screen name="SendAddress" component={SendAddress} />
      <Stack.Screen name="Confirm" component={Confirm} />
      <Stack.Screen name="QrScanner" component={QrScanner} />
      <Stack.Screen name="QrAddress" component={QrAddress} />
      <Stack.Screen name="TokenDetail" component={TokenDetail} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
    </Stack.Navigator>
  );
};

export default WalletStack;
