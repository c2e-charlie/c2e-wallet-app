import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrcodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrInfo, setQrInfo] = useState('');

  const handleTextQrInfo = (text: string) => {
    setInputValue(text);
  };

  const handleCreateQrCodeBtn = () => {
    setQrInfo(inputValue);
    Keyboard.dismiss();
  };

  const handleInitQrBtn = () => {
    setInputValue('');
    setQrInfo('');
    Keyboard.dismiss();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
      }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ marginBottom: 16 }}>QR 생성기</Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: 300,
            marginBottom: 20,
            height: 40,
            borderRadius: 8,
            padding: 8,
          }}
          value={inputValue}
          onChangeText={handleTextQrInfo}
          placeholder="텍스트 입력"
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#00aaeb',
          }}
          onPress={handleCreateQrCodeBtn}>
          <Text style={{ color: 'white', fontWeight: 800, fontSize: 16 }}>
            Qr 생성하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#00aaeb',
            marginTop: 20,
          }}
          onPress={handleInitQrBtn}>
          <Text style={{ color: 'white', fontWeight: 800, fontSize: 16 }}>
            초기화
          </Text>
        </TouchableOpacity>
      </View>

      {qrInfo && (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <QRCode value={qrInfo || ''} size={180} />
          <View style={{ marginTop: 16 }}>
            <Text>{`qr정보: ${qrInfo}`}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default QrcodeGenerator;
