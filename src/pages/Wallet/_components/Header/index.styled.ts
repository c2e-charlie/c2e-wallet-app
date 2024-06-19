import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 5px 14px 5px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: 800;
`;

export const HeaderRight = styled.View`
  display: flex;
  flex-direction: row;
`;

export const IconTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconImage = styled.Image`
  width: 44px;
  height: 44px;
`;
