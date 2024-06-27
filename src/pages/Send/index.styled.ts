import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
`;

export const QuantityContainer = styled.View`
  margin: 89px 0 120px;
  width: 100%;
  align-items: center;
`;

export const C2EContainer = styled.View`
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const QuantityText = styled.Text<{ quantity: string }>`
  font-size: 26px;
  color: ${({ quantity }: { quantity: string }) =>
    quantity === '' ? '#F0F0F3' : '#444447'};
  font-weight: 800;
`;

export const C2EText = styled.Text`
  font-size: 26px;
  color: #444447;
  font-weight: 800;
`;

export const BalanceText = styled.Text`
  font-size: 14px;
  color: #a8adbb;
  font-weight: 600;
`;

export const MaxButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 80px;
  height: 34px;
  justify-content: center;
  align-items: center;
  background-color: #8eb0fa;
  border-radius: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.14);
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 900;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  padding: 20px 20px 0;
  width: 100%;
`;
