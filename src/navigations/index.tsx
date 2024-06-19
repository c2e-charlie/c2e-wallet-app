import React from 'react';
import BottomNavigator from '@/navigations/Bottom';
import Wallet from '@/navigations/Wallet/WalletStack';
import Login from '@/navigations/Login/LoginStack';
import Community from '@/navigations/Community/CommunityStack';
import Quest from '@/navigations/Quest/QuestStack';
import VendingMachine from '@/navigations/VendingMachine/VendingStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Nav = createNativeStackNavigator();

const Index = () => {
  return (
    <Nav.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Bottom" component={BottomNavigator} />
      <Nav.Screen name="Community" component={Community} />
      <Nav.Screen name="Quest" component={Quest} />
      <Nav.Screen name="Wallet" component={Wallet} />
      <Nav.Screen name="VendingMachine" component={VendingMachine} />
    </Nav.Navigator>
  );
};
export default Index;
