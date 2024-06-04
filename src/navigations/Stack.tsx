import React from 'react';
import BottomNavigator from './Bottom';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNavigator">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomNavigator"
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
