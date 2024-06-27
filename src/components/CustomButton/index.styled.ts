import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { ButtonContainerStyledProps, ButtonProps } from './index.types';
import { DefaultTheme } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({
    theme,
    disabled,
    gradientColors = [],
    backgroundColor,
    disabledType2,
  }: ButtonContainerStyledProps) =>
    gradientColors && gradientColors?.length > 0
      ? 'transparent'
      : disabledType2 && disabled
      ? theme.colors.disableButton
      : backgroundColor || theme.colors.primary};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }: { fullWidth: string }) =>
    fullWidth ? '100%' : 'auto'};
  height: ${({ height }: { height: number }) => `${height}px`};
  border-width: ${({ borderWidth }: { borderWidth: number }) =>
    borderWidth || 0}px;
  border-color: ${({ borderColor }: { borderColor: string }) =>
    borderColor || 'white'};
  opacity: ${({
    disabled,
    disabledType2,
  }: {
    disabled: boolean;
    disabledType2: boolean;
  }) => (disabledType2 ? 1 : disabled ? 0.3 : 1)};
`;

export const ButtonText = styled.Text<{
  color?: string;
  disabledType2?: boolean;
  fontWeight?: any;
}>`
  color: ${({
    theme,
    color,
    disabledType2,
    disabled,
  }: {
    theme: DefaultTheme;
    color: string;
    disabled: boolean;
    disabledType2: boolean;
  }) =>
    disabledType2 && disabled
      ? theme.colors.disableText
      : color || theme.colors.textInverse};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSize.medium}px;
  font-weight: ${({ fontWeight }: { fontWeight: string }) =>
    fontWeight ? fontWeight : 'normal'};
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
