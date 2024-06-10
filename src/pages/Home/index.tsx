import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
      <Button onPress={() => {}} text="test" />
    </View>
  );
};

export default Home;
