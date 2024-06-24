import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from '@/pages/Community';
import React from 'react';
import Bottom from '../Bottom';
import Board from '@/pages/Board';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { hamburger_button } from 'public/assets/images/icons/navigation';

const Stack = createNativeStackNavigator();

const CommunityStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={hamburger_button} style={{ marginRight: 20 }} />
            </TouchableOpacity>
          ),
        }}
        name="community"
        component={Community}
      />
      {/* <Stack.Screen name="Bottom" component={Bottom} /> */}
      <Stack.Screen name="Board" component={Board} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
