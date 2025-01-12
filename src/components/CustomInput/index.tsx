import React, { useState } from 'react';
import { CustomInputPropsType } from '@/components/CustomInput/index.type';
import {
  CleanButton,
  CleanIcon,
  Container,
  FillButton,
  FillButtonText,
  Input,
} from '@/components/CustomInput/index.styled';
import { handleBlur, handleFocus } from '@/components/CustomInput/index.utils';
import InputCleanIcon from 'public/assets/images/icons/CustomInput/input_clean_icon.png';

const CustomInput = ({
  type = 'border',
  value = '',
  setValue = () => {},
  placeholder = 'Placeholder',
  isError = false,
  fillOnPress,
}: CustomInputPropsType) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Container type={type} isFocused={isFocused} isError={isError}>
      <Input
        type={type}
        isError={isError}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        onFocus={() => handleFocus(setIsFocused)}
        onBlur={() => handleBlur(setIsFocused)}
      />
      {type === 'fill' ? (
        <FillButton onPress={fillOnPress}>
          <FillButtonText>Max</FillButtonText>
        </FillButton>
      ) : (
        <CleanButton onPress={() => setValue('')}>
          {value.length > 0 && <CleanIcon source={InputCleanIcon} />}
        </CleanButton>
      )}
    </Container>
  );
};

export default CustomInput;
