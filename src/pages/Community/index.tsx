import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RandomKeyPad from '../../components/RandomKeyPad';
import Keypad from '../../components/KeyPad';

const Community = () => {
  const [value, setValue] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Community</Text>
      {/*<RandomKeyPad onValueChange={setValue} />*/}
      {/*<Keypad onValueChange={setValue} />*/}
    </View>
  );
};

export default Community;
