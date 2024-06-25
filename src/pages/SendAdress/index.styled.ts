import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: space-between;
`;

export const Content = styled.View``;

export const MainContent = styled.View`
  padding: 30px 20px 0;
`;

export const HistoryHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const HistoryText = styled.Text`
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #a8adbb;
`;

export const HistoryContainer = styled.FlatList`
  height: 65%;
  display: flex;
  flex-direction: column;
`;

export const HistoryItem = styled.View`
  padding: 14px 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddressText = styled.Text`
  width: 70%;
  font-size: 14px;
  font-weight: 600;
  color: #444447;
`;

export const StarButton = styled.TouchableOpacity`
  display: flex;
`;

export const StarImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const QrCodeButton = styled.TouchableOpacity`
  padding: 15px 0;
  width: 30%;
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #e6e6e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const QrCodeImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const NextButton = styled.View`
  width: 67%;
  display: flex;
  align-items: center;
`;

export const ButtonList = styled.View`
  padding: 0 20px 5px;
  width: 100%;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
