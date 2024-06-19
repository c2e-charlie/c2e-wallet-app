import React, { useState } from 'react';
import {
  BalanceText,
  ButtonText,
  C2EContainer,
  C2EText,
  Container,
  MaxButton,
  QuantityContainer,
  QuantityText,
} from '@/pages/Send/index.styled';
import NumberPad from '@/components/KeyPad/NumberPad';

const Index = () => {
  const [quantity, setQuantity] = useState('');

  return (
    <Container>
      <QuantityContainer>
        <C2EContainer>
          <QuantityText>{quantity}</QuantityText>
          <C2EText>C2E</C2EText>
        </C2EContainer>
        <BalanceText>잔액 1C2E</BalanceText>
        <MaxButton>
          <ButtonText>Max</ButtonText>
        </MaxButton>
      </QuantityContainer>
      <NumberPad onValueChange={setQuantity} />
    </Container>
  );
};

export default Index;
