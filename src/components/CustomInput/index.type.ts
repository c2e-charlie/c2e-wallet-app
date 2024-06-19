export interface CustomInputPropsType extends InputTypeProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  fillOnPress?: () => void;
}

export interface InputTypeProps {
  type: 'border' | 'underline' | 'fill';
  isError: boolean;
}

export interface ContainerPropsType extends InputTypeProps {
  isFocused: boolean;
}

export interface CustomButtonPropsType {
  fillOnPress: () => void;
}
