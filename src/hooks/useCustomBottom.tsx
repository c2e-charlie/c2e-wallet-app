import { Route, NavigationState } from '@react-navigation/native';
import { useRef } from 'react';
import { Animated } from 'react-native';

interface CustomBottomState extends NavigationState {
  routes: Route<string>[];
}

export const useCustomBottom = (state: CustomBottomState) => {
  const animatedValues = state.routes.map(
    () => useRef(new Animated.Value(1)).current,
  );

  const handlePressIn = (index: number) => {
    Animated.spring(animatedValues[index], {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (index: number) => {
    Animated.spring(animatedValues[index], {
      toValue: 1,
      friction: 3,
      tension: 60,
      useNativeDriver: true,
    }).start();
  };

  return {
    animatedValues,
    handlePressIn,
    handlePressOut,
  };
};
