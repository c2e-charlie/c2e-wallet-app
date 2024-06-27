import React, { RefObject } from 'react';
import {
  ButtonContainer,
  Container,
  ContentItem,
  Header,
  HeaderAddress,
  ItemText,
  NickName,
  RightArrowIcon,
} from '@/pages/Wallet/_components/HistoryModal/index.styled';
import RightArrow from 'public/assets/images/icons/wallet/right_arrow.png';
import CustomButton from '@/components/CustomButton';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Index = ({
  navigation,
  bottomSheetModalRef,
}: {
  navigation: any;
  bottomSheetModalRef: RefObject<BottomSheetModal>;
}) => {
  return (
    <Container>
      <NickName>김둘리의 지갑</NickName>
      <Header>
        <HeaderAddress numberOfLines={1} ellipsizeMode={'middle'}>
          0xa053195BD11738B50f27aE73F683936CEFA784C5
        </HeaderAddress>
        <ButtonContainer>
          <CustomButton
            text={'지갑주소 복사'}
            color={'#9BA1B1'}
            fullWidth
            height={30}
            backgroundColor={'#F0F0F3'}
          />
        </ButtonContainer>
      </Header>
      <ContentItem
        onPress={() => {
          navigation.navigate('WalletStack', { screen: 'History' });
          bottomSheetModalRef.current?.close();
        }}>
        <ItemText>거래내역</ItemText>
        <RightArrowIcon source={RightArrow} />
      </ContentItem>
      <ContentItem>
        <ItemText>포인트내역</ItemText>
        <RightArrowIcon source={RightArrow} />
      </ContentItem>
    </Container>
  );
};

export default Index;
