import React from 'react';
import Bottom from './Bottom';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '@/components/CustomDrawerContent';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={{ headerShown: false, drawerType: 'front' }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <DrawerNav.Screen name="Bottom" component={Bottom} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
