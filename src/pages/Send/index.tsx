import React, { useState } from 'react';
import {
  BalanceText,
  ButtonContainer,
  ButtonText,
  C2EContainer,
  C2EText,
  Container,
  MaxButton,
  QuantityContainer,
  QuantityText,
} from '@/pages/Send/index.styled';
import NumberPad from '@/components/KeyPad/NumberPad';
import Header from '@/components/Header';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState('');

  return (
    <Container>
      <Header title={'보내기'} />
      <QuantityContainer>
        <C2EContainer>
          <QuantityText quantity={quantity}>
            {quantity === '' ? '0' : quantity}
          </QuantityText>
          <C2EText>C2E</C2EText>
        </C2EContainer>
        <BalanceText>잔액 1C2E</BalanceText>
        <MaxButton>
          <ButtonText>MAX</ButtonText>
        </MaxButton>
      </QuantityContainer>
      <NumberPad onValueChange={setQuantity} />
      <ButtonContainer>
        <CustomButton
          onPress={() => navigation.navigate('SendAdress')}
          fullWidth
          text={'다음'}
          gradientColors={['#1BE0CD', '#47C8FC']}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Index;
