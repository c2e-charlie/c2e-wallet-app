import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import BottomSheetComponent from '@/components/BottomSheet';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Community = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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
        <Text>버디버디</Text>
      </BottomSheetComponent>
    </View>
  );
};

export default Community;
