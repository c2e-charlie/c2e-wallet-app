import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';

export const Container = styled(BlurView)`
  padding: 20px 20px 40px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const QrContainer = styled.View`
  margin-bottom: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QrInfoView = styled.View`
  margin: 16px 0;
  padding: 14px 10px;
  width: 208px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.2);
`;

export const QrText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const QrCodeView = styled.View`
  padding: 14px;
  width: 280px;
  height: 280px;
  border-radius: 34px;
  overflow: hidden;
  background-color: #fff;
`;
