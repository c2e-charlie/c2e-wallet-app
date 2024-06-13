import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal, { modalStateAtom } from '@/components/Modal';
import { useAtom } from 'jotai';

const Community = () => {
  const [isModalState, setIsModalState] = useAtom(modalStateAtom);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button onPress={() => setIsModalState(true)} title={'Open Modal'} />
      <Text>Community</Text>
      {isModalState && (
        <Modal isModalState={isModalState} setIsModalState={setIsModalState}>
          <Text> 모달입니다. </Text>
        </Modal>
      )}
    </View>
  );
};

export default Community;
