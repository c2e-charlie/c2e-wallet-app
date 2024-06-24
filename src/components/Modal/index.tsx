import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import { atom } from 'jotai';
import { ModalProps } from '@/components/Modal/index.type';

export const modalStateAtom = atom<boolean>(false);

const Index = ({ children, isModalState, setIsModalState }: ModalProps) => {
  return (
    <Modal isVisible={isModalState}>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
        }}>
        {children}
      </View>
    </Modal>
  );
};

export default Index;
