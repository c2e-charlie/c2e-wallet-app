import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px 20px 20px;
  display: flex;
  height: 100%;
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
  font-weight: 700;
  color: #444447;
`;

export const ButtonList = styled.View`
  padding: 0 0 20px;
  width: 100%;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const CancelButton = styled.View`
  padding: 21px 0;
  width: 40%;
  display: flex;
  align-items: center;
  background-color: #f0f0f3;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CancelText = styled.Text`
  font-size: 16px;
  color: #9ba1b1;
  font-weight: 700;
`;

export const ConfirmButton = styled.View`
  width: 57%;
  display: flex;
  align-items: center;
`;

export const ConfirmText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
`;
