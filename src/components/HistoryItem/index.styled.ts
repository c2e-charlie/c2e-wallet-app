import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
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

export const ListRightView = styled.View``;

export const TokenText = styled.Text`
  color: #444447;
  font-size: 14px;
  font-weight: 500;
`;

export const TimeText = styled.Text`
  color: #9ba1b1;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
`;
