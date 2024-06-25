import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const QrHeader = styled.SafeAreaView`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100000;
`;

export const Title = styled.Text`
  padding: 18px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export const ScanContainer = styled.View`
  padding: 26px 30px 20px;
`;

export const ScanBox = styled.View`
  width: 100%;
  height: 320px;
  border-radius: 26px;
  border: 3px solid #fff;
`;

export const ScanText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: 300;
`;
