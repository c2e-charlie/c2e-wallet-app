import { ImageSourcePropType } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | number;
  color?: string;
  startIcon?: ImageSourcePropType;
  endIcon?: ImageSourcePropType;
  borderColor?: string;
};
