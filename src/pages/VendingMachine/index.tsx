import React from 'react';
import { View } from 'react-native';
import QrcodeScanner from '../../components/QrcodeScanner';
import QrcodeGenerator from '../../components/QrcodeGenerator';

const VendingMachine = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <QrcodeScanner />
      <QrcodeGenerator />
    </View>
  );
};

export default VendingMachine;
