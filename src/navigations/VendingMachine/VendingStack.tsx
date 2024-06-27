import React from 'react';
import VendingMachine from '@/pages/VendingMachine';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const VendingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="vending" component={VendingMachine} />
    </Stack.Navigator>
  );
};

export default VendingStack;
