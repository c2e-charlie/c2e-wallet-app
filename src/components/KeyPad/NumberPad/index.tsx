import React from 'react';
import {
  ArrowLeftImage,
  Button,
  ButtonText,
  Container,
} from '../_index.styled';
import { handlePress } from '@/components/KeyPad/NumberPad/index.utils';
import ArrowLeft from 'public/assets/images/icons/login/arrow_left.png';

const Keypad = ({
  onValueChange,
}: {
  onValueChange: (value: string | ((prevValue: string) => string)) => void;
}) => {
  return (
    <Container>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'C'].map(
        (num, index) => (
          <Button
            key={index}
            onPress={() => handlePress(num, onValueChange)}
            underlayColor="#F0F0F3">
            {num === 'C' ? (
              <ArrowLeftImage source={ArrowLeft} />
            ) : (
              <ButtonText>{num}</ButtonText>
            )}
          </Button>
        ),
      )}
    </Container>
  );
};

export default Keypad;
