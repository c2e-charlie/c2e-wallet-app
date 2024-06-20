import React from 'react';
import { ButtonProps } from './index.types';
import { ButtonContainer, styles } from './index.styled';
import LinearGradient from 'react-native-linear-gradient';
import CustomButtonContent from './_components/CustomButtonContent';

const CustomButton = ({
  onPress,
  text,
  type,
  color,
  shadow,
  endIcon,
  onlyIcon,
  disabled,
  startIcon,
  fullWidth,
  borderWidth,
  borderColor,
  gradientColors = [],
  backgroundColor,
  disabledType2,
  fontWeight,
}: ButtonProps) => {
  return (
    <ButtonContainer
      disabled={disabled}
      onPress={onPress}
      gradientColors={gradientColors}
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      fullWidth={fullWidth}
      style={shadow ? styles.customButtonShadow : {}}
      disabledType2={disabledType2}
      activeOpacity={0.5}>
      {gradientColors && gradientColors.length > 0 ? (
        <LinearGradient
          colors={
            disabledType2 && disabled ? ['#F0F0F3', '#F0F0F3'] : gradientColors
          }
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.gradientBackground,
            borderRadius: 30,
          }}>
          <CustomButtonContent
            type={type}
            onlyIcon={onlyIcon}
            startIcon={startIcon}
            text={text}
            color={color}
            disabled={disabled}
            disabledType2={disabledType2}
            endIcon={endIcon}
            fontWeight={fontWeight}
          />
        </LinearGradient>
      ) : (
        <CustomButtonContent
          fontWeight={fontWeight}
          type={type}
          onlyIcon={onlyIcon}
          startIcon={startIcon}
          text={text}
          color={color}
          disabled={disabled}
          disabledType2={disabledType2}
          endIcon={endIcon}
        />
      )}
    </ButtonContainer>
  );
};

export default CustomButton;
