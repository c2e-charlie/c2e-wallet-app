import {useRef} from 'react';
import {Animated} from 'react-native';

export const useCustomBottom = state => {
  const animatedValues = state.routes.map(
    () => useRef(new Animated.Value(1)).current,
  );

  const handlePressIn = index => {
    Animated.spring(animatedValues[index], {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = index => {
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
