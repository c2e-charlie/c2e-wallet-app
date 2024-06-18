import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #ffffff;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 5px 14px 5px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderUserName = styled.Text`
  color: #444447;
  font-size: 14px;
  font-weight: 400;
`;

export const HeaderUserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #e5e5e5;
  background: rgba(240, 240, 243, 0.6);
  margin-right: 6px;
`;

export const SettingTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingIconImage = styled.Image`
  width: 44px;
  height: 44px;
`;

export const WalletContainer = styled.View`
  padding: 0 20px;
`;

export const BalanceContainer = styled.View`
  border-radius: 26px;
  border: 1px solid #f0f0f3;
`;

export const Balance = styled.View`
  padding: 24px 20px 26px;
  background-color: #1be0cd;
  border-radius: 26px;
`;

export const BalanceTitleContainer = styled.View`
  margin-bottom: 26px;
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

export const BalanceAmountContainer = styled.View`
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
  font-weight: 800;
  color: #fff;
`;

export const RefreshTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const RefreshImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const TransactionContainer = styled.View`
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export const TransactionItem = styled.View`
  padding: 14px 0;
  width: 90px;
  border-radius: 30px;
  background: #fff;
  align-items: center;
`;

export const TransactionItemTitle = styled.Text`
  font-size: 14px;
  color: #9ba1b1;
  font-weight: 800;
`;

export const SwapItem = styled.View`
  padding: 14px 0;
  width: 90px;
  border-radius: 30px;
  background: #fff;
  align-items: center;
`;

export const PointContainer = styled.View`
  padding: 10px 28px 18px;
`;

export const Point = styled.View`
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

export const PointImage = styled.Image`
  width: 28px;
  height: 28px;
`;

export const PointAmount = styled.Text`
  font-size: 18px;
  color: #444447;
  font-weight: 800;
`;
