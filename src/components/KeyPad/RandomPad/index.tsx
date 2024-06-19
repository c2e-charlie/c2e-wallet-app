import React, { useState, useEffect } from 'react';
import {
  Button,
  ButtonText,
  Container,
  ArrowLeftImage,
} from '../_index.styled';
import {
  randomKeyPadHandlePress,
  shuffle,
} from '@/components/KeyPad/RandomPad/index.utils';
import { NumberPadProps } from '@/components/KeyPad/_index.type';
import ArrowLeft from 'public/assets/images/icons/login/arrow_left.png';

const RandomKeyPad = ({ onValueChange }: NumberPadProps) => {
  const [numbers, setNumbers] = useState<(number | string)[]>([]);

  useEffect(() => {
    const initialNumbers: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const shuffledNumbers = shuffle(initialNumbers);
    shuffledNumbers.splice(9, 0, ' ');
    shuffledNumbers.splice(11, 0, 'C');
    setNumbers(shuffledNumbers);
  }, []);

  return (
    <Container>
      {numbers.map((number, index) => (
        <Button
          key={index}
          onPress={() =>
            randomKeyPadHandlePress(number.toString(), onValueChange)
          }
          underlayColor="#F0F0F3">
          {number === 'C' ? (
            <ArrowLeftImage source={ArrowLeft} />
          ) : (
            <ButtonText>{number}</ButtonText>
          )}
        </Button>
      ))}
    </Container>
  );
};

export default RandomKeyPad;
