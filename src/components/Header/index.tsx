import React from 'react';
import {
  ArrowLeftImage,
  ArrowTouchable,
  Container,
  Title,
} from '@/components/Header/index.styled';
import ArrowLeft from 'public/assets/images/icons/header/arrow_left.png';
import { useNavigation } from '@react-navigation/native';

const Index = ({ title }: { title?: string }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ArrowTouchable onPress={() => navigation.goBack()}>
        <ArrowLeftImage source={ArrowLeft} />
      </ArrowTouchable>
      <Title>{title ? title : ''}</Title>
    </Container>
  );
};

export default Index;
