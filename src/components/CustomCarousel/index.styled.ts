import theme from '@/theme';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const CarouselContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarContainer = styled.View<{ progressBgColor: string }>`
  flex-direction: row;
  width: width;
  height: 5px;
  background-color: ${({ progressBgColor }) => progressBgColor};
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Item = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ItemText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const styles = StyleSheet.create({
  progressSegmentContainer: {
    flex: 1,
    backgroundColor: theme.colors.c2e_white_03,
  },
  progressSegment: {
    height: 5,
    backgroundColor: theme.colors.white,
    borderRadius: 2,
  },
});
