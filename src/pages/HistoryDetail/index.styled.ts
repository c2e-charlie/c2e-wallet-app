import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const TitleView = styled.View`
  margin: 44px 0 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleLeft = styled.View`
  display: flex;
  gap: 8px;
`;

export const Title = styled.Text`
  color: #444447;
  font-size: 20px;
  font-weight: 800;
`;

export const State = styled.Text`
  color: #5fc88f;
  font-size: 14px;
  font-weight: 500;
`;

export const TitleIcon = styled.Image`
  width: 54px;
  height: 54px;
`;

export const BalanceText = styled.Text`
  margin-bottom: 14px;
  color: #444447;
  font-size: 20px;
  font-weight: 700;
`;

export const DetailView = styled.View`
  padding: 16px 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: #f0f0f3;
  display: flex;
  gap: 12px;
`;

export const DetailItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemLeft = styled.Text`
  color: #9ba1b1;
  font-size: 14px;
  font-weight: 500;
`;

export const ItemRight = styled.Text`
  width: 50%;
  color: #444447;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
`;

export const TxId = styled.Text`
  width: 40%;
  color: #4e8af4;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
`;
