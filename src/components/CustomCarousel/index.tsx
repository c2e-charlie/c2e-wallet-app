import {
  Item,
  styles,
  ItemText,
  CarouselContainer,
  ProgressBarContainer,
} from './index.styled';
import { data } from './index.utils';
import { CarouselProps } from './index.types';
import Carousel from 'react-native-reanimated-carousel';
import { View, Dimensions, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const { width } = Dimensions.get('window');

const CustomCarousel = ({ progressBgColor }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressAnim = useRef(data.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    if (activeIndex === 0) {
      progressAnim.forEach(anim => anim.setValue(0));
    }

    progressAnim.forEach((anim, index) => {
      if (index <= activeIndex) {
        Animated.timing(anim, {
          toValue: width / data.length - 6,
          duration: 2000,
          useNativeDriver: false,
        }).start();
      } else {
        anim.setValue(0);
      }
    });
  }, [activeIndex, progressAnim]);

  return (
    <CarouselContainer>
      <ProgressBarContainer progressBgColor={progressBgColor}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressSegmentContainer,
              index !== 0 && index !== data.length - 1
                ? { marginHorizontal: 9 }
                : {},
            ]}>
            <Animated.View
              style={[styles.progressSegment, { width: progressAnim[index] }]}
            />
          </View>
        ))}
      </ProgressBarContainer>

      <Carousel
        loop
        width={width}
        height={200}
        autoPlay={true}
        autoPlayInterval={2000}
        enabled={false}
        data={data}
        scrollAnimationDuration={2000}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({ item }) => (
          <Item>
            <ItemText>{item.title}</ItemText>
            <ItemText>{item.content}</ItemText>
          </Item>
        )}
      />
    </CarouselContainer>
  );
};

export default CustomCarousel;
