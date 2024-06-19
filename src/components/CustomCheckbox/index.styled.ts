import styled from 'styled-components/native';

export const CheckboxContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const Checkbox = styled.View<{
  checked?: boolean;
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? width : 20)}px;
  height: ${({ height }) => (height ? height : 20)}px;
  border-color: #d4d4da;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
`;

export const CheckedImg = styled.Image`
  width: ${({ width }) => (width ? width : 20)}px;
  height: ${({ height }) => (height ? height : 20)}px;
  overflow: hidden;
  border-width: 1.5px;
  border-color: #d4d4da;
  border-radius: 6px;
  background-color: #8eb0fa;
`;
