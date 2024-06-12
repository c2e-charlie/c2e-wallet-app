import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.TouchableHighlight`
  margin: 5px;
  width: 30%;
  padding: 15px 0;
  background-color: #fff;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  min-width: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 26px;
  color: #444447;
`;

export const ArrowLeftImage = styled.Image`
  width: 28px;
  height: 28px;
`;
