import Svg from 'react-native-svg';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { height } from './index.utils';

export const TabBarContainer = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: ${height}px;
`;

export const TabIcon = styled.Image<{ isHome: boolean }>`
  width: ${(props: any) => (props.isHome ? 50 : 24)}px;
  height: ${(props: any) => (props.isHome ? 50 : 24)}px;
  margin-bottom: 5px;
  margin-top: ${(props: any) => (props.isHome ? 0 : 9)}px;
`;

export const StyledSvg = styled(Svg)`
  position: absolute;
  top: -20px;
`;

export const Tabs = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const CustomTabBar = styled.View<{ height: number }>`
  position: absolute;
  top: -20px;
  left: 0px;
  right: 0px;
  height: ${(props: any) => props.height + 20}px;
`;

export const styles = StyleSheet.create({
  customTabBarShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
