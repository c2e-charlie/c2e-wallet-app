import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px 20px 20px;
  //background-color: #222;
  //justify-content: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.View`
  display: flex;
  align-items: center;
`;

export const SendTokenIcon = styled.Image`
  width: 64px;
  height: 64px;
  background-color: #f0f0f3;
  border-radius: 64px;
`;

export const SendAmount = styled.Text`
  margin-top: 16px;
  font-size: 26px;
  font-weight: 900;
  color: #333;
`;

export const InfoContainer = styled.View`
  padding: 0 17px;
  width: 100%;
  margin-top: 44px;
  gap: 8px;
`;

export const InfoItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #9ba1b1;
`;

export const InfoValue = styled.Text`
  text-align: right;
  width: 50%;
  font-size: 14px;
  font-weight: 800;
  color: #444447;
`;

export const ButtonList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CancelButton = styled.View``;

export const ConfirmButton = styled.View``;
