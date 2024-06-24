import React from 'react';
import Board from '@/pages/Board';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Bottom from './Bottom';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { hamburger_button } from 'public/assets/images/icons/navigation';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  const navigation = useNavigation();

  return (
    <DrawerNav.Navigator screenOptions={{ headerShown: false }}>
      <DrawerNav.Screen name="Bottom" component={Bottom} />
      <DrawerNav.Screen
        options={{
          headerShown: false,
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={hamburger_button} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ),
        }}
        name="Board"
        component={Board}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
