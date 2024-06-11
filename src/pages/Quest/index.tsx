import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Keypad from '../../components/KeyPad';
import RandomKeyPad from '../../components/RandomKeyPad';

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
      {/*<Keypad onValueChange={setValue} />*/}
      <RandomKeyPad onValueChange={setValue} />
    </View>
  );
};

export default Quest;
