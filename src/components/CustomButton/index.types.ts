import { ImageSourcePropType } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export type ButtonProps = {
  onPress?: () => void;
  text?: string;
  backgroundColor?: string;
  color?: string;
  startIcon?: ImageSourcePropType;
  endIcon?: ImageSourcePropType;
  onlyIcon?: ImageSourcePropType;
  disabled?: boolean;
  type?: 'default' | 'loading';
  shadow?: boolean;
  borderWidth?: number;
  borderColor?: string;
  fullWidth?: boolean;
  disabledType2?: boolean;
  gradientColors?: string[];
  fontWeight?: any;
  height?: number;
};

export interface ButtonContainerStyledProps extends ButtonProps {
  theme: DefaultTheme;
  disabled: boolean;
  gradientColors: string[];
  backgroundColor: string;
  disabledType2: boolean;
}
