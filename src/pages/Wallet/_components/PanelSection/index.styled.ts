import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  width: 100%;
  border-radius: 26px;
  border: 1px solid #f0f0f3;
  background-color: #f0f0f3;
  box-shadow: 0 6px 10px rgba(142, 176, 250, 0.14);
`;

export const TabSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TabTouchable = styled.TouchableOpacity<{
  active?: boolean;
}>`
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }: { active: boolean }) =>
    active ? '#fff' : '#f0f0f3'};
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
`;

export const TabText = styled.Text<{
  active?: boolean;
}>`
  font-size: 14px;
  color: ${({ active }: { active: boolean }) =>
    active ? '#444447' : '#9ba1b1'};
  font-weight: 600;
`;

export const TabBottomView = styled.View`
  padding: 14px 20px;
  background-color: #fff;
  border-top-color: #f0f0f3;
  border-top-width: 1px;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
`;

export const TokenItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TokenLeft = styled.View`
  padding: 9px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TokenImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const TokenName = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #444447;
  font-weight: 500;
`;

export const TokenRight = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const TokenAmount = styled.Text`
  font-size: 14px;
  color: #444447;
  font-weight: 500;
`;

export const TokenKRW = styled.Text`
  font-size: 12px;
  color: #9ba1b1;
  font-weight: 400;
`;
