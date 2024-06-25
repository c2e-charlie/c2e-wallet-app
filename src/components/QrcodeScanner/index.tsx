import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';
import Loading from '../Loading';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const QrcodeScanner = () => {
  const [qrCodeInfo, setQrcodeInfo] = useState<string>('');
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: any) => {
      console.log(`Scanned ${codes[0].value} codes!`);
      setQrcodeInfo(codes[0].value);
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
