import CustomButton from '@/components/CustomButton';
import CustomCheckbox from '@/components/CustomCheckbox';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Community = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
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
      <CustomCheckbox checked={isChecked} onPress={handleCheckbox} />
    </View>
  );
};

export default Community;
