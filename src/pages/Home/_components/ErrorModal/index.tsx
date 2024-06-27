import React from 'react';
import {
  Container,
  ErrorImage,
  Title,
  TitleView,
} from '@/pages/Home/_components/ErrorModal/index.styled';
import CustomButton from '@/components/CustomButton';
import ErrorIcon from 'public/assets/images/icons/home/error_icon.png';

const Index = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <Container>
      <ErrorImage source={ErrorIcon} />
      <TitleView>
        <Title>개인별 최대 교환 기능 개수를 초과했습니다.</Title>
      </TitleView>
      <CustomButton
        fullWidth
        text={'확인'}
        backgroundColor={'#1BE0CD'}
        onPress={() => closeModal()}
      />
    </Container>
  );
};
export default Index;
