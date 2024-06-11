import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RandomKeyPad from './index';
import { NumberPadProps } from '@/components/KeyPad/_index.type';

export default {
  title: 'RandomKeyPad',
  component: RandomKeyPad,
} as Meta;

const Template: StoryFn<NumberPadProps> = (args: NumberPadProps) => (
  <RandomKeyPad {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onValueChange: value => console.log(value),
};
