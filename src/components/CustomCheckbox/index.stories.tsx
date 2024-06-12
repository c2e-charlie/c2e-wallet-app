import CustomCheckbox from '.';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

const CheckboxMeta: Meta<typeof CustomCheckbox> = {
  title: 'Checkbox',
  component: CustomCheckbox,
  argTypes: {
    onPress: { action: 'pressed the checkbox' },
    checked: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
  args: {
    checked: true,
    width: 30,
    height: 30,
  },
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CheckboxMeta;

export const Basic: StoryObj<typeof CustomCheckbox> = {};
