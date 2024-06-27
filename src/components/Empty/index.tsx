import React from 'react';
import EmptyIcon from 'public/assets/images/icons/wallet/empty_icon.png';
import {
  Container,
  EmptyImage,
  EmptyText,
} from '@/components/Empty/index.styled';

const Index = () => {
  return (
    <Container>
      <EmptyImage source={EmptyIcon} />
      <EmptyText>최근 내역이 존재하지 않습니다</EmptyText>
    </Container>
  );
};
export default Index;
