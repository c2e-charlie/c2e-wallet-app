import React from 'react';
import Bottom from '@/navigations/Bottom';
import WalletStack from '@/navigations/Wallet/WalletStack';
import LoginStack from '@/navigations/Login/LoginStack';
import CommunityStack from '@/navigations/Community/CommunityStack';
import QuestStack from '@/navigations/Quest/QuestStack';
import VendingMachineStack from '@/navigations/VendingMachine/VendingStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Nav = createNativeStackNavigator();

const Index = () => {
  return (
    <Nav.Navigator
      initialRouteName="Bottom"
      screenOptions={{ headerShown: false }}>
      <Nav.Screen name="LoginStack" component={LoginStack} />
      <Nav.Screen name="Bottom" component={Bottom} />
      <Nav.Screen name="CommunityStack" component={CommunityStack} />
      <Nav.Screen name="QuestStack" component={QuestStack} />
      <Nav.Screen name="WalletStack" component={WalletStack} />
      <Nav.Screen name="VendingMachineStack" component={VendingMachineStack} />
    </Nav.Navigator>
  );
};
export default Index;
