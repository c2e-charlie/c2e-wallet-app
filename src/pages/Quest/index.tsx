import React, { useState } from 'react';
import { View, Text } from 'react-native';
// import RandomKeyPad from '@/components/KeyPad/RandomPad';
import Keypad from '@/components/KeyPad/NumberPad';

const Quest = () => {
  const [value, setValue] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Quest</Text>
      <Text>{value}</Text>
      <Keypad onValueChange={setValue} />
      {/*<RandomKeyPad onValueChange={setValue} />*/}
    </View>
  );
};

export default Quest;
