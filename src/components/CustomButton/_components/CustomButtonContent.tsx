import { Image, View } from 'react-native';
import { ButtonProps } from '../index.types';
import { ButtonText } from '../index.styled';
import { button_loading } from 'public/assets/images/icons/common';
import React from 'react';

export const IconWithText = ({
  startIcon,
  text,
  color,
  disabled,
  disabledType2,
  endIcon,
  fontWeight,
}: ButtonProps) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {startIcon && (
      <Image
        source={startIcon}
        style={{ width: 20, height: 20, marginRight: 10.1 }}
      />
    )}
    <ButtonText
      fontWeight={fontWeight}
      disabled={disabled}
      disabledType2={disabledType2}
      color={color}>
      {text}
    </ButtonText>
    {endIcon && (
      <Image
        source={endIcon}
        style={{ width: 20, height: 20, marginLeft: 10.1 }}
      />
    )}
  </View>
);

const CustomButtonContent = ({
  type,
  onlyIcon,
  startIcon,
  text,
  color,
  disabled,
  disabledType2,
  endIcon,
  fontWeight,
}: ButtonProps) => {
  if (type === 'loading') {
    return <Image source={button_loading} />;
  }

  if (onlyIcon) {
    return <Image source={onlyIcon} />;
  }

  return (
    <IconWithText
      startIcon={startIcon}
      text={text}
      color={color}
      disabled={disabled}
      disabledType2={disabledType2}
      endIcon={endIcon}
      fontWeight={fontWeight}
    />
  );
};

export default CustomButtonContent;
