import { ImageSourcePropType } from 'react-native';

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
};
