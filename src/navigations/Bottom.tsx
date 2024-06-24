import React from 'react';
import Home from '../pages/Home';
import Quest from '../pages/Quest';
import Wallet from '../pages/Wallet';
import VendingMachine from '../pages/VendingMachine';
import CustomBottom from '../components/CustomBottom';
import { Image, TouchableOpacity } from 'react-native';
import CommunityStack from './Community/CommunityStack';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { hamburger_button } from 'public/assets/images/icons/navigation';

const Tab = createBottomTabNavigator();
const Bottom = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === 'Community',
        headerTitle: '',
        headerLeft: () => null,
        headerRight: () =>
          route.name === 'Community' ? (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={hamburger_button} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ) : null,
        tabBar: (props: any) => <CustomBottom {...props} />,
      })}
      tabBar={props => <CustomBottom {...props} />}
      initialRouteName="Home">
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen
        options={{
          tabBarLabel: '퀘스트',
        }}
        name="Quest"
        component={Quest}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
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

export default Bottom;
