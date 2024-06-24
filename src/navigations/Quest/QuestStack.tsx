import React from 'react';
import Quest from '@/pages/Quest';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const QuestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="quest" component={Quest} />
    </Stack.Navigator>
  );
};

export default QuestStack;
