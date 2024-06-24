import React from 'react';
import {
  ButtonList,
  Container,
  InfoContainer,
  InfoItem,
  InfoText,
  InfoValue,
  MainContent,
  SendAmount,
  SendTokenIcon,
} from '@/pages/SendAdress/_component/SendModal/index.styled';

const Index = () => {
  return (
    <Container>
      <MainContent>
        <SendTokenIcon source={''} />
        <SendAmount>6.010 C2E</SendAmount>
        <InfoContainer>
          <InfoItem>
            <InfoText>받는주소</InfoText>
            <InfoValue numberOfLines={1} ellipsizeMode={'middle'}>
              0x8284F52A3369f23D8587fd90bDE6abfF9Be2665D
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoText>네트워크</InfoText>
            <InfoValue numberOfLines={1} ellipsizeMode={'middle'}>
              Ethereum
            </InfoValue>
          </InfoItem>
        </InfoContainer>
      </MainContent>
      <ButtonList></ButtonList>
    </Container>
  );
};
export default Index;
