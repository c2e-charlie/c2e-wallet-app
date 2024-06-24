import { useAtom } from 'jotai';
import React, { useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomCarousel from '@/components/CustomCarousel';
import Modal, { modalStateAtom } from '@/components/Modal';
import BottomSheetComponent from '@/components/BottomSheet';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';
import CustomButton from '@/components/CustomButton';
import { screenWidth } from '@/utils';

const Community = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isModalState, setIsModalState] = useAtom(modalStateAtom);
  const [currentPage, setCurrentPage] = useState('community');

  const handleModalPress = handlePresentModalPress(bottomSheetModalRef);

  if (currentPage === 'community') {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#EBF9FF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#EBF9FF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>drawer test</Text>
          <Button title={'Open Bottom Sheet'} onPress={handleModalPress} />
          <View style={{ width: screenWidth }}>
            <CustomButton text="Test" onPress={() => setCurrentPage('board')} />
          </View>

          <CustomCarousel />

          <BottomSheetComponent ref={bottomSheetModalRef}>
            <Button onPress={() => setIsModalState(true)} title={'모달 버튼'} />
          </BottomSheetComponent>
          {isModalState && (
            <Modal
              isModalState={isModalState}
              setIsModalState={setIsModalState}>
              <Text> 모달입니다. </Text>
            </Modal>
          )}
        </View>
      </View>
    );
  }

  if (currentPage === 'board') {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#EBF9FF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>board</Text>
      </View>
    );
  }
};

export default Community;
