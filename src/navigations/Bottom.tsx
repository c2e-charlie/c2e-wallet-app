import React from 'react';
import Home from '../pages/Home';
import Quest from '../pages/Quest';
import Wallet from '../pages/Wallet';
import Community from '../pages/Community';
import VendingMachine from '../pages/VendingMachine';
import CustomBottom from '../components/CustomBottom';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}
      tabBar={props => <CustomBottom {...props} />}
      initialRouteName="Community">
      <Tab.Screen
        options={{
          tabBarLabel: '커뮤니티',
        }}
        name="Community"
        component={Community}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '퀘스트',
        }}
        name="Quest"
        component={Quest}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'C2E',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '지갑',
        }}
        name="Wallet"
        component={Wallet}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '자판기',
        }}
        name="VendingMachine"
        component={VendingMachine}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
