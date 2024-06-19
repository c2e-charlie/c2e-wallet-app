import React from 'react';
import { Path } from 'react-native-svg';
import { screenWidth } from '../../utils';
import { Animated, Text } from 'react-native';
import { useCustomBottom } from '../../hooks/useCustomBottom';
import { height, icons, upperBorderRadius } from './index.utils';
import {
  Tabs,
  styles,
  TabItem,
  TabIcon,
  StyledSvg,
  CustomTabBar,
  TabBarContainer,
} from './index.styled';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomBottom: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const { animatedValues, handlePressIn, handlePressOut } =
    useCustomBottom(state);
  console.log('log');

  return (
    <TabBarContainer>
      <CustomTabBar height={height} style={styles.customTabBarShadow}>
        <StyledSvg
          width={screenWidth}
          height={height + 50}
          viewBox={`0 0 ${screenWidth} ${height + 10}`}>
          <Path
            d={`M${upperBorderRadius},0 
              L${screenWidth / 2 - 30},0 
              Q${screenWidth / 2},-25 ${screenWidth / 2 + 30},0 
              L${screenWidth - upperBorderRadius},0 
              Q${screenWidth},0 ${screenWidth},${upperBorderRadius}
              L${screenWidth},${height + 20} 
              L0,${height + 20} 
              L0,${upperBorderRadius} 
              Q0,0 ${upperBorderRadius},0 
              Z`}
            fill="white"
            stroke="lightgrey"
            strokeWidth={0}
          />
        </StyledSvg>
        <Tabs>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TabItem
                key={index}
                activeOpacity={1}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => onPress()}
                onPressIn={() => handlePressIn(index)}
                onPressOut={() => handlePressOut(index)}>
                <Animated.View
                  style={{
                    transform: [
                      {
                        scale: animatedValues[index],
                      },
                    ],
                    alignItems: 'center',
                  }}>
                  <TabIcon
                    source={
                      isFocused
                        ? icons[route.name].focus
                        : icons[route.name].notFocus
                    }
                    isHome={route.name === 'Home'}
                  />
                  {route.name !== 'Home' && (
                    <Text
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        color: isFocused ? 'black' : 'gray',
                      }}>
                      {label as string}
                    </Text>
                  )}
                </Animated.View>
              </TabItem>
            );
          })}
        </Tabs>
      </CustomTabBar>
    </TabBarContainer>
  );
};

export default CustomBottom;
