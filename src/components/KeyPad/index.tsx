import React, { useState, useEffect } from 'react';
import { handlePress } from './index.utils';
import { Button, ButtonText, Container } from './index.styled';

const Keypad = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <Container>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'C'].map(
        (num, index) => (
          <Button
            key={index}
            onPress={() => handlePress(num, setValue)}
            underlayColor="#F0F0F3">
            <ButtonText>{num}</ButtonText>
          </Button>
        ),
      )}
    </Container>
  );
};

export default Keypad;
