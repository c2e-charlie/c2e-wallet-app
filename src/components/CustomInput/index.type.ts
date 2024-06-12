export interface CustomInputPropsType extends InputTypeProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export interface InputTypeProps {
  type: 'border' | 'underline' | 'fill';
  isError: boolean;
}

export interface ContainerPropsType extends InputTypeProps {
  isFocused: boolean;
}
