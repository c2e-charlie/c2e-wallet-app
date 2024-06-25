import React from 'react';
import {
  ConfirmImage,
  ConfirmText,
  Container,
  NextButton,
} from '@/pages/Confirm/index.styled';
import CheckBlue from 'public/assets/images/icons/wallet/check_blue.png';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ConfirmImage source={CheckBlue} />
      <ConfirmText>보내기 완료했어요</ConfirmText>
      <NextButton>
        <CustomButton
          text={'다음'}
          fullWidth
          gradientColors={['#1BE0CD', '#47C8FC']}
          onPress={() => {
            navigation.navigate('Bottom', { screen: 'Wallet' });
          }}
        />
      </NextButton>
    </Container>
  );
};
export default Index;
