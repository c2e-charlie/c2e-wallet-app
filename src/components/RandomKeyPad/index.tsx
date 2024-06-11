import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, ButtonText } from '../KeyPad/index.styled';
import { handlePress } from '../KeyPad/index.utils';

const RandomKeyPad = ({ onValueChange }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const shuffledNumbers = shuffle(initialNumbers);
    shuffledNumbers.splice(9, 0, '.');
    shuffledNumbers.splice(11, 0, 'C');
    setNumbers(shuffledNumbers);
  }, []);

  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {numbers.map((number, index) => (
        <Button
          key={index}
          onPress={() => handlePress(number.toString(), onValueChange)}>
          <ButtonText>{number}</ButtonText>
        </Button>
      ))}
    </View>
  );
};

export default RandomKeyPad;
