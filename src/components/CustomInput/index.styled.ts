import styled from 'styled-components/native';
import {
  ContainerPropsType,
  InputTypeProps,
} from '@/components/CustomInput/index.type';

export const Container = styled.View<ContainerPropsType>`
  padding: ${({ type }) => {
    if (type === 'underline') {
      return '16px 0';
    } else if (type === 'fill') {
      return '26px 16px';
    } else {
      return '16px';
    }
  }};
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  ${({ type, isFocused, isError }) => {
    if (type === 'underline') {
      return `
        border-bottom-color: ${
          isError ? '#EF8382' : isFocused ? '#8EB0FA' : '#D4D4DA'
        };
        border-bottom-width:2px;
        background-color: #fff;
      `;
    } else if (type === 'border') {
      return `
        border: 1.5px solid ${
          isError ? '#EF8382' : isFocused ? '#9BA1B1' : '#E6E6E8'
        };
        border-radius: 14px;
        shadow-color: ${isError ? '#EF8382' : isFocused ? '#9BA1B1' : '#fff'};
        shadow-offset: 0px 0px;
        shadow-opacity: 0.5;
        shadow-radius: 4px;
        background-color: #fff;
      `;
    } else if (type === 'fill') {
      return `
        border-radius: 18px;
        border: 1.5px solid #F0F3F8;
        background: #FBFCFE;
      `;
    }
  }}
`;

export const Input = styled.TextInput<InputTypeProps>`
  width: ${({ type }) => {
    if (type === 'fill') {
      return '81%';
    } else {
      return '88%';
    }
  }};
  font-size: ${({ type }) => {
    if (type === 'underline') {
      return '18px';
    } else if (type === 'fill') {
      return '22px';
    } else {
      return '16px';
    }
  }};
  font-weight: ${({ type }) =>
    type === 'underline' ? '800' : type === 'fill' ? '600' : 'normal'};
  color: ${({ theme, type, isError }) => {
    if (type === 'fill' && isError) {
      return '#EF6163';
    } else {
      return theme.fontColor.block;
    }
  }};
`;

export const CleanButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const CleanIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const FillButton = styled.TouchableOpacity`
  width: 54px;
  height: 32px;
  border-radius: 20px;
  background-color: #8eb0fa;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  elevation: 1;
  justify-content: center;
  align-items: center;
`;

export const FillButtonText = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: #fff;
`;

export const Test = styled.View`
  width: 54px;
  height: 32px;
`;
