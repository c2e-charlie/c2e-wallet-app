import CustomButton from '@/components/CustomButton';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Community = () => {
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
        onPress={() => {}}
        gradientColors={['#1BE0CD', '#47C8FC']}
        text="test"
        fullWidth
      />
    </View>
  );
};

export default Community;
