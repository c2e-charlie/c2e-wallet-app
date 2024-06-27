import styled from 'styled-components/native';
import {
  ContainerPropsType,
  InputTypeProps,
} from '@/components/CustomInput/index.type';
import theme from '@/theme';
import { DefaultTheme } from 'styled-components/native';

export const Container = styled.View<ContainerPropsType>`
  padding: ${({ type }: { type: string }) => {
    if (type === 'underline') {
      return '12px 0';
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
  ${({
    type,
    isFocused,
    isError,
  }: {
    type: string;
    isFocused: boolean;
    isError: boolean;
  }) => {
    if (type === 'underline') {
      return `
        border-bottom-color: ${
          isError
            ? theme.colors.c2e_red_01
            : isFocused
            ? theme.colors.c2e_blue_02
            : theme.colors.c2e_white_02
        };
        border-bottom-width:2px;
        background-color: #fff;
      `;
    } else if (type === 'border') {
      return `
        border: 1.5px solid ${
          isError
            ? theme.colors.c2e_red_01
            : isFocused
            ? theme.colors.c2e_gray_02
            : '#E6E6E8'
        };
        border-radius: 14px;
        shadow-color: ${
          isError
            ? theme.colors.c2e_red_01
            : isFocused
            ? theme.colors.c2e_gray_02
            : theme.colors.textInverse
        };
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

export const Input = styled.TextInput.attrs<InputTypeProps>(() => ({
  placeholderTextColor: '#A8ADBB',
}))`
  ::placeholder {
    color: red;
  }
  width: ${({ type }: { type: string }) => {
    if (type === 'fill') {
      return '75%';
    } else {
      return '88%';
    }
  }};
  font-size: ${({ type }: { type: string }) => {
    if (type === 'underline') {
      return '18px';
    } else if (type === 'fill') {
      return '22px';
    } else {
      return '16px';
    }
  }};
  font-weight: ${({ type }: { type: string }) =>
    type === 'underline' ? '800' : type === 'fill' ? '600' : 'normal'};
  color: ${({
    theme,
    type,
    isError,
  }: {
    theme: DefaultTheme;
    type: string;
    isError: boolean;
  }) => {
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
