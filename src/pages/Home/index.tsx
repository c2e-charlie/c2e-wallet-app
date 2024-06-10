import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { handleInputChange } from './index.utils';
import BigNumber from 'bignumber.js';
import { formatNumber } from '../../utils/utils';

const Home = () => {
  const myPoint = 500;
  const dailyMaxChangeC2e = 13;
  const exChangeRate = 0.5;
  const [inputPoint, setInputPoint] = useState<string>('');
  const [C2E, setC2E] = useState<string>('');

  useEffect(() => {
    setC2E((new BigNumber(inputPoint).toNumber() * exChangeRate).toString());
  }, [inputPoint]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={input => {
          handleInputChange(
            input,
            myPoint,
            dailyMaxChangeC2e,
            exChangeRate,
            setInputPoint,
          );
        }}
        value={inputPoint}
        placeholder="포인트 값을 입력하세요"
        keyboardType="decimal-pad"
      />
      <Text>{formatNumber(C2E)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;
