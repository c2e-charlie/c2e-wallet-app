import React, { RefObject } from 'react';
import {
  ButtonList,
  CancelButton,
  CancelText,
  ConfirmButton,
  Container,
  InfoContainer,
  InfoItem,
  InfoText,
  InfoValue,
  MainContent,
  SendAmount,
  SendTokenIcon,
} from '@/pages/SendAddress/_component/SendModal/index.styled';
import CustomButton from '@/components/CustomButton';
import { goToConfirm } from '@/pages/Confirm/index.utils';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Index = ({
  navigation,
  bottomSheetModalRef,
}: {
  navigation?: any;
  bottomSheetModalRef: RefObject<BottomSheetModal>;
}) => {
  return (
    <Container>
      <MainContent>
        <SendTokenIcon source={''} />
        <SendAmount>6.010 C2E</SendAmount>
        <InfoContainer>
          <InfoItem>
            <InfoText>받는주소</InfoText>
            <InfoValue numberOfLines={1} ellipsizeMode={'middle'}>
              0x8284F52A3369f23D8587fd90bDE6abfF9Be2665D
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoText>네트워크</InfoText>
            <InfoValue>Ethereum</InfoValue>
          </InfoItem>
        </InfoContainer>
      </MainContent>
      <ButtonList>
        <CancelButton>
          <CancelText>취소</CancelText>
        </CancelButton>
        <ConfirmButton>
          <CustomButton
            onPress={() => goToConfirm(navigation, bottomSheetModalRef)}
            shadow={true}
            fullWidth
            text={'보내기'}
            gradientColors={['#1BE0CD', '#47C8FC']}
          />
        </ConfirmButton>
      </ButtonList>
    </Container>
  );
};
export default Index;
