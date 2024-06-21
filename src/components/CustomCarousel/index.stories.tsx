import React from 'react';
import theme from '@/theme';
import CustomButton from '.';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components/native';
import CustomCarousel from '.';

const CarouselMeta: Meta<typeof CustomCarousel> = {
  title: 'progressAutoCarousel',
  component: CustomCarousel,
  argTypes: {},
  args: { progressBgColor: 'blue' },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'gray',
          }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default CarouselMeta;

export const Default: StoryObj<typeof CustomButton> = {
  args: {
    // text: 'CustomButton',
  },
};
