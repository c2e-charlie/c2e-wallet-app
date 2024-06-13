import React from 'react';
import Modal from 'react-native-modal';
import { Button, View } from 'react-native';
import { atom } from 'jotai';
import { ModalProps } from '@/components/Modal/index.type';

export const modalStateAtom = atom<boolean>(false);

const Index = ({ children, isModalState, setIsModalState }: ModalProps) => {
  return (
    <Modal isVisible={isModalState}>
      <View style={{ flex: 0.5, backgroundColor: '#fff' }}>
        {children}
        <Button title="Hide modal" onPress={() => setIsModalState(false)} />
      </View>
    </Modal>
  );
};

export default Index;
