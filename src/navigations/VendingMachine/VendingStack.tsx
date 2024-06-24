import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendingMachine from '@/pages/VendingMachine';
import React from 'react';

const Stack = createNativeStackNavigator();

const VendingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="vending" component={VendingMachine} />
    </Stack.Navigator>
  );
};

export default VendingStack;
