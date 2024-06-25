import React from 'react';
import {
  ArrowLeftImage,
  ArrowTouchable,
  Container,
  Title,
} from '@/components/Header/index.styled';
import ArrowLeft from 'public/assets/images/icons/header/arrow_left.png';

const Index = ({ title }: { title?: string }) => {
  return (
    <Container>
      <ArrowTouchable>
        <ArrowLeftImage source={ArrowLeft} />
      </ArrowTouchable>
      <Title>{title ? title : ''}</Title>
    </Container>
  );
};

export default Index;
