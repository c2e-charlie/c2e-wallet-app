import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';
import Loading from '../Loading';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigations/index.type';

const QrcodeScanner = ({ quantity }: { quantity: string }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: any) => {
      console.log('codes: ', codes[0].value);
      navigation.navigate('WalletStack', {
        screen: 'SendAddress',
        params: { quantity: quantity, qrScanAddress: codes[0].value },
      });
    },
  });

  if (!device) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Loading />
      </View>
    );
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  );
};

export default QrcodeScanner;
