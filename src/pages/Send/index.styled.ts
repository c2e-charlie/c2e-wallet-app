import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const QuantityContainer = styled.View`
  margin: 89px 0 142px;
  width: 100%;
`;

export const C2EContainer = styled.View`
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const QuantityText = styled.Text`
  font-size: 26px;
  //color: #444447;
  color: #f0f0f3;
  font-weight: 500;
`;

export const C2EText = styled.Text`
  font-size: 26px;
  color: #444447;
  font-weight: 500;
`;

export const BalanceText = styled.Text`
  font-size: 14px;
  color: #a8adbb;
  font-weight: 700;
`;

export const MaxButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 80px;
  height: 34px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 900;
  color: #fff;
`;
