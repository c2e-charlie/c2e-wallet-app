import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 26px;
  border: 1px solid #f0f0f3;
  box-shadow: 0 6px 10px rgba(142, 176, 250, 0.14);
  background-color: #fff;
`;

export const Balance = styled.View`
  padding: 24px 20px 26px;
  background-color: #78e8d1;
  border-radius: 26px;
`;

export const BalanceTop = styled.View`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceTitle = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 800;
`;

export const BalanceSettingTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const BalanceSettingImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const BalanceMid = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 31px;
`;

export const C2EImage = styled.Image`
  margin-right: 6px;
  width: 34px;
  height: 34px;
`;

export const BalanceAmount = styled.Text`
  margin-right: 6px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.14);
`;

export const RefreshTouchable = styled.TouchableOpacity`
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RefreshImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const BalanceBottom = styled.View`
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const TransactionItem = styled.TouchableOpacity`
  //border-radius: 30px;
`;

export const TransactionItemTitle = styled.Text`
  font-size: 14px;
  color: #9ba1b1;
  font-weight: 800;
`;

export const PointContainer = styled.View`
  padding: 10px 28px 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PointTitle = styled.Text`
  font-size: 14px;
  color: #9ba1b1;
  font-weight: 800;
`;

export const PointRight = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const PointImage = styled.Image`
  width: 28px;
  height: 28px;
`;

export const PointAmount = styled.Text`
  font-size: 18px;
  color: #444447;
  font-weight: 800;
`;

export const ButtonImage = styled.Image`
  width: 90px;
  height: 44px;
`;
