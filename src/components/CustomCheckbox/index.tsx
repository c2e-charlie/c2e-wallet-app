import React from 'react';
import { Image } from 'react-native';
import { Checkbox, CheckboxContainer } from './index.styled';
import { checkbox_on } from 'public/assets/images/icons/checkbox';

type CheckBoxProps = {
  checked: boolean;
  onPress: () => void;
};

const CustomCheckbox = ({ checked, onPress }: CheckBoxProps) => {
  return (
    <CheckboxContainer activeOpacity={0.6} onPress={onPress}>
      <Checkbox>
        {checked && <Image source={checkbox_on} style={{ borderRadius: 20 }} />}
      </Checkbox>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
