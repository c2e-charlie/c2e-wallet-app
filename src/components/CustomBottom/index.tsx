import React from 'react';
import {screenWidth} from '../../utils';
import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components/native';
import {Animated, Text, StyleSheet} from 'react-native';
import {useCustomBottom} from '../../hooks/useCustomBottom';
import {height, icons, upperBorderRadius} from './index.utils';

const CustomBottom = ({state, descriptors, navigation}) => {
  const {animatedValues, handlePressIn, handlePressOut} =
    useCustomBottom(state);

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
            const {options} = descriptors[route.key];
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
                accessibilityState={isFocused ? {selected: true} : {}}
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
                      {label}
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

const TabBarContainer = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: ${height}px;
`;

const TabIcon = styled.Image<{isHome: boolean}>`
  width: ${props => (props.isHome ? 50 : 24)}px;
  height: ${props => (props.isHome ? 50 : 24)}px;
  margin-bottom: 5px;
  margin-top: ${props => (props.isHome ? 0 : 9)}px;
`;

const StyledSvg = styled(Svg)`
  position: absolute;
  top: -20px;
`;

const Tabs = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

const CustomTabBar = styled.View<{height: number}>`
  position: absolute;
  top: -20px;
  left: 0px;
  right: 0px;
  height: ${props => props.height + 20}px;
`;

const styles = StyleSheet.create({
  customTabBarShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CustomBottom;
