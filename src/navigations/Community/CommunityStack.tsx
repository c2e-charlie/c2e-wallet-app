import React from 'react';
import Board from '@/pages/Board';
import Community from '@/pages/Community';
import InfoBoard from '@/pages/InfoBoard/InfoBoard';
import NewsBoard from '@/pages/NewsBoard/NewsBoard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CommunityStack = () => {
  const forFade = ({ current }: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
        name="community"
        component={Community}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
        name="Board"
        component={Board}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
        name="InfoBoard"
        component={InfoBoard}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
        name="NewsBoard"
        component={NewsBoard}
      />
    </Stack.Navigator>
  );
};

export default CommunityStack;
