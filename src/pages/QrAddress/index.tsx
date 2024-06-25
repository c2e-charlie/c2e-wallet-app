import React from 'react';
import {
  Container,
  QrCodeView,
  QrContainer,
  QrInfoView,
  QrText,
} from '@/pages/QrAddress/index.styled';
import CustomButton from '@/components/CustomButton';
import QRCode from 'react-native-qrcode-svg';

const Index = () => {
  const myAddress = '0xd9699f448d9655f62cdf9d0ea03309a95234c53d';

  return (
    <Container>
      <QrContainer>
        <QrCodeView>
          <QRCode value={myAddress || ''} size={250} />
        </QrCodeView>
        <QrInfoView>
          <QrText>{myAddress}</QrText>
        </QrInfoView>
        <QrText>주소를 스캔해주세요</QrText>
      </QrContainer>
      <CustomButton
        text={'주소 복사'}
        onPress={() => {}}
        backgroundColor={'#8EB0FA'}
      />
    </Container>
  );
};
export default Index;
