import { useAtom } from 'jotai';
import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomCarousel from '@/components/CustomCarousel';
import Modal, { modalStateAtom } from '@/components/Modal';
import BottomSheetComponent from '@/components/BottomSheet';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';

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

      <CustomCarousel />

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
