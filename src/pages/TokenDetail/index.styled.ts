import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

export const TokenContainer = styled.View`
  margin: 60px 0 120px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TokenText = styled.Text`
  font-size: 30px;
  color: #444447;
  font-weight: 600;
`;

export const KrwText = styled.Text`
  margin-top: 10px;
  color: #a8adbb;
  font-size: 14px;
  font-weight: 400;
`;

export const ButtonList = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.View`
  width: 76px;
`;

export const HistoryContainer = styled.View`
  padding: 0 24px 25px;
`;

export const HistoryList = styled.FlatList`
  margin-top: 16px;
  height: 50%;
`;

export const ListItem = styled.View`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ListIcon = styled.Image`
  width: 44px;
  height: 44px;
`;

export const ListInfo = styled.View`
  display: flex;
  gap: 8px;
`;

export const InfoText = styled.Text`
  color: #444447;
  font-size: 14px;
  font-weight: 800;
`;

export const StateText = styled.Text`
  color: #5fc88f;
  font-size: 12px;
  font-weight: 700;
`;

export const ListRightText = styled.Text`
  color: #444447;
  font-size: 16px;
  font-weight: 800;
`;
