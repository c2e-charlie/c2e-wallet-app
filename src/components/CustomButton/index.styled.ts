import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{
  backgroundColor?: string;
  borderRadius?: number;
  opacity?: number;
  borderWidth?: number;
  borderColor?: string;
  fullWidth?: boolean;
  disabledType2?: boolean;
  gradientColors?: string[];
}>`
  background-color: ${({
    theme,
    disabled,
    gradientColors = [],
    backgroundColor,
    disabledType2,
  }) =>
    gradientColors && gradientColors?.length > 0
      ? 'transparent'
      : disabledType2 && disabled
      ? theme.colors.disableButton
      : backgroundColor || theme.colors.primary};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: 60px;
  border-width: ${({ borderWidth }) => borderWidth || 0}px;
  border-color: ${({ borderColor }) => borderColor || 'white'};
  opacity: ${({ disabled, disabledType2 }) =>
    disabledType2 ? 1 : disabled ? 0.3 : 1};
`;

export const ButtonText = styled.Text<{
  color?: string;
  disabledType2?: boolean;
  fontWeight?: any;
}>`
  color: ${({ theme, color, disabledType2, disabled }) =>
    disabledType2 && disabled
      ? theme.colors.disableText
      : color || theme.colors.textInverse};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
`;

export const styles = StyleSheet.create({
  customButtonShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  gradientBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '100%',
  },
});
