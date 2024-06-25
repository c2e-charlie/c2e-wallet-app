import React from 'react';
import {
  Container,
  QrHeader,
  ScanBox,
  ScanContainer,
  ScanText,
  Title,
} from '@/pages/QrScanner/index.styled';
import QrcodeScanner from '@/components/QrcodeScanner';
import {
  ArrowLeftImage,
  ArrowTouchable,
} from '@/components/Header/index.styled';
import ArrowLeft from 'public/assets/images/icons/wallet/white_left_arrow.png';

const Index = () => {
  return (
    <Container>
      <QrHeader>
        <ArrowTouchable>
          <ArrowLeftImage source={ArrowLeft} />
        </ArrowTouchable>
        <Title>QR 스캔</Title>
      </QrHeader>
      <QrcodeScanner />
      <ScanContainer>
        <ScanBox />
      </ScanContainer>
      <ScanText>QR코드를 스캔하세요</ScanText>
    </Container>
  );
};
export default Index;
