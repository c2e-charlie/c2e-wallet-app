import React from 'react';
import { checkbox_on } from 'public/assets/images/icons/checkbox';
import { Checkbox, CheckboxContainer, CheckedImg } from './index.styled';

type CheckBoxProps = {
  checked: boolean;
  onPress: () => void;
  width: number;
  height: number;
};

const CustomCheckbox = ({ checked, onPress, width, height }: CheckBoxProps) => {
  return (
    <CheckboxContainer activeOpacity={0.6} onPress={onPress}>
      <Checkbox checked={checked} width={width} height={height}>
        {checked && (
          <CheckedImg source={checkbox_on} width={width} height={height} />
        )}
      </Checkbox>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
