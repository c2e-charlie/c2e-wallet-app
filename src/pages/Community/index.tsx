import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '@/components/CustomButton';
import Toast from 'react-native-toast-message';

const Community = () => {
  const handleClickButton = () => {
    Toast.show({
      type: 'error_02',
      props: { uuid: 'test1234' },
      text1: '잘못된 주소 형식입니다',
      position: 'bottom',
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Community</Text>
      <CustomButton
        onPress={handleClickButton}
        gradientColors={['#1BE0CD', '#47C8FC']}
        text="test"
        fullWidth
      />
    </View>
  );
};

export default Community;
