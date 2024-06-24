import React from 'react';
import Wallet from '@/pages/Wallet';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="wallet" component={Wallet} />
    </Stack.Navigator>
  );
};

export default WalletStack;
