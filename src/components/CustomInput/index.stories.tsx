import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components/native';
import CustomInput from './index';
import { CustomInputPropsType } from '@/components/CustomInput/index.type';
import { Meta, StoryFn } from '@storybook/react';
import theme from '@/theme/index';

export default {
  title: 'Components/CustomInput',
  component: CustomInput,
} as Meta;

const Template: StoryFn<CustomInputPropsType> = (
  args: CustomInputPropsType,
) => {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CustomInput {...args} value={value} setValue={handleChange} />
    </ThemeProvider>
  );
};

export const Border = Template.bind({});
Border.args = {
  placeholder: '보내는 지갑 주소',
  type: 'border',
  isError: false,
};

export const Underline = Template.bind({});
Underline.args = {
  placeholder: '닉네임을 입력해주세요',
  type: 'underline',
  isError: false,
};

export const Fill = Template.bind({});
Fill.args = {
  placeholder: '0',
  type: 'fill',
  isError: false,
};
