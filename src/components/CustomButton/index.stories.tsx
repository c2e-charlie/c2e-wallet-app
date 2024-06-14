import React from 'react';
import theme from '@/theme';
import CustomButton from '.';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components/native';

const ButtonMeta: Meta<typeof CustomButton> = {
  title: 'Button',
  component: CustomButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
    disabled: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['default', 'loading'],
    },
    shadow: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabledType2: { control: 'boolean' },
  },
  args: {
    text: 'Button',
    color: theme.colors.textInverse,
    backgroundColor: theme.colors.primary,
    type: 'default',
    shadow: false,
    fullWidth: true,
    disabledType2: false,
    disabled: false,
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default ButtonMeta;

export const Default: StoryObj<typeof CustomButton> = {
  args: {
    text: 'CustomButton',
  },
};
