import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
`;

export const ArrowTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 48px;
`;

export const ArrowLeftImage = styled.Image`
  position: absolute;
  left: 0;
  width: 48px;
  height: 48px;
`;

export const Title = styled.Text`
  padding: 18px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  color: #333333;
  //text-align: center;
`;
