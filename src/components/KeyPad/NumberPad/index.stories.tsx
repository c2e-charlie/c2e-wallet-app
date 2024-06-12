import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NumberPad from './index';
import { NumberPadProps } from '@/components/KeyPad/_index.type';

export default {
  title: 'NumberPad',
  component: NumberPad,
} as Meta;

const Template: StoryFn<NumberPadProps> = (args: NumberPadProps) => (
  <NumberPad {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onValueChange: value => console.log(value),
};
