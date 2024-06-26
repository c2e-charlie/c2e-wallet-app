import React from 'react';
import { Container } from '@/pages/History/index.styled';
import Coin from '@/pages/History/_component/Coin';
import Point from '@/pages/History/_component/Point';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '@/components/Header';

const Tab = createMaterialTopTabNavigator();

const Index = () => {
  return (
    <Container>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
          tabBarActiveTintColor: '#444447',
          tabBarInactiveTintColor: '#A8ADBB',
        }}>
        <Tab.Screen name="코인 내역" component={Coin} />
        <Tab.Screen name="포인트 내역" component={Point} />
      </Tab.Navigator>
    </Container>
  );
};

export default Index;
