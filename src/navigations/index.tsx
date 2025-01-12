import React from 'react';
import Drawer from './Drawer';
import Login from '@/navigations/Login/LoginStack';
import { createStackNavigator } from '@react-navigation/stack';
import WalletStack from '@/navigations/Wallet/WalletStack';

const Nav = createStackNavigator();

const Index = () => {
  return (
    <Nav.Navigator
      initialRouteName="Bottom"
      screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Drawer" component={Drawer} />
      <Nav.Screen name="WalletStack" component={WalletStack} />
    </Nav.Navigator>
  );
};
export default Index;
