import React from 'react';
import { menuItems } from './index.utils';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const CustomDrawerContent = () => {
  const navigation = useNavigation<any>();

  const navigateToScreen = (screen: string) => {
    navigation.navigate('Bottom', {
      screen: 'Community',
      params: { screen: screen },
    });
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={{ paddingLeft: 20, paddingTop: 65 }}>
      <Text
        style={{
          padding: 10,
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 114,
        }}>
        게시판
      </Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigateToScreen(item.route)}
            style={{ padding: 10 }}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.label}
      />
    </View>
  );
};

export default CustomDrawerContent;
