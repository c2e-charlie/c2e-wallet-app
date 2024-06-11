import React, { useState, useEffect } from 'react';
import {
  Button,
  ButtonText,
  Container,
  ArrowLeftImage,
} from '../_index.styled';
import { FaceIdImage } from '@/components/KeyPad/RandomPad/index.styled';
import {
  randomKeyPadHandlePress,
  shuffle,
} from '@/components/KeyPad/RandomPad/index.utils';
import { Modal, Text, View } from 'react-native';
import FaceIdIcon from 'public/assets/images/icons/login/faceid_icon.png';
import ArrowLeft from 'public/assets/images/icons/login/arrow_left.png';

const RandomKeyPad = ({
  onValueChange,
}: {
  onValueChange: (value: string | ((prevValue: string) => string)) => void;
}) => {
  const [numbers, setNumbers] = useState<(number | string)[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const initialNumbers: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const shuffledNumbers = shuffle(initialNumbers);
    shuffledNumbers.splice(9, 0, '.');
    shuffledNumbers.splice(11, 0, 'C');
    setNumbers(shuffledNumbers);
  }, []);

  return (
    <Container>
      {numbers.map((number, index) => (
        <Button
          key={index}
          onPress={() =>
            randomKeyPadHandlePress(number.toString(), onValueChange, () =>
              setIsModalVisible(true),
            )
          }
          underlayColor="#F0F0F3">
          {number === '.' ? (
            <FaceIdImage source={FaceIdIcon} />
          ) : number === 'C' ? (
            <ArrowLeftImage source={ArrowLeft} />
          ) : (
            <ButtonText>{number}</ButtonText>
          )}
        </Button>
      ))}
      {isModalVisible && (
        <Modal>
          <View>
            <Text>페이스 아이디</Text>
          </View>
        </Modal>
      )}
    </Container>
  );
};

export default RandomKeyPad;
