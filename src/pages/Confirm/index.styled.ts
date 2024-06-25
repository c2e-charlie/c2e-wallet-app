import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ConfirmImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ConfirmText = styled.Text`
  margin-top: 24px;
  font-size: 20px;
  color: #000;
  font-weight: 700;
`;

export const NextButton = styled.View`
  margin-top: 308px;
  padding: 0 20px 5px;
  width: 100%;
  display: flex;
`;
