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
import { useNavigation } from '@react-navigation/native';

const Index = ({ route }: { route: { params: string } }) => {
  const quantity = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <QrHeader>
        <ArrowTouchable onPress={() => navigation.goBack()}>
          <ArrowLeftImage source={ArrowLeft} />
        </ArrowTouchable>
        <Title>QR 스캔</Title>
      </QrHeader>
      <QrcodeScanner quantity={quantity} />
      <ScanContainer>
        <ScanBox />
      </ScanContainer>
      <ScanText>QR코드를 스캔하세요</ScanText>
    </Container>
  );
};
export default Index;
