import Button from '.';
import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

const ButtonMeta: Meta<typeof Button> = {
  title: 'MyButtons',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Button',
  },
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic: StoryObj<typeof Button> = {};

export const AnotherExample: StoryObj<typeof Button> = {
  args: {
    text: 'Button',
  },
};

export const Test: StoryObj<typeof Button> = {};
