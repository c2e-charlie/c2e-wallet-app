import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import Modal, { modalStateAtom } from '@/components/Modal';
import { useAtom } from 'jotai';
import BottomSheetComponent from '@/components/BottomSheet';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Community = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isModalState, setIsModalState] = useAtom(modalStateAtom);

  const handleModalPress = handlePresentModalPress(bottomSheetModalRef);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Community</Text>
      <Button title={'Open Bottom Sheet'} onPress={handleModalPress} />
      <BottomSheetComponent ref={bottomSheetModalRef}>
        <Button onPress={() => setIsModalState(true)} title={'모달 버튼'} />
      </BottomSheetComponent>
      {isModalState && (
        <Modal isModalState={isModalState} setIsModalState={setIsModalState}>
          <Text> 모달입니다. </Text>
        </Modal>
      )}
    </View>
  );
};

export default Community;
