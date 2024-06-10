import {
  Camera,
  useCodeScanner,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import Loading from '../Loading';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const QrcodeScanner = () => {
  const [qrCodeInfo, setQrcodeInfo] = useState<string>('');

  const device = useCameraDevice('back');
  // const {hasPermission, requestPermission} = useCameraPermission(); // 유저 권한 여부 기능
  const width = Dimensions.get('window').width;

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: any) => {
      console.log(`Scanned ${codes[0].value} codes!`);
      setQrcodeInfo(codes[0].value);
    },
  });

  //   if (!hasPermission) return < />

  if (!device)
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Loading />
      </View>
    );

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          // justifyContent: 'center',
          width,
          height: 400,
          paddingHorizontal: 32,
        }}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 16 }}>QR 정보</Text>
        <Text>{qrCodeInfo}</Text>
      </View>
    </View>
  );
};

export default QrcodeScanner;
