import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px 14px;
  display: flex;
  background-color: #fff;
`;

export const NickName = styled.Text`
  margin-left: 10px;
  color: #444447;
  font-size: 18px;
  font-weight: 800;
`;

export const Header = styled.View`
  margin-bottom: 26px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100px;
`;

export const HeaderAddress = styled.Text`
  width: 50%;
  color: #9ba1b1;
  font-size: 14px;
  font-weight: 400;
`;

export const ContentItem = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;

export const RightArrowIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
