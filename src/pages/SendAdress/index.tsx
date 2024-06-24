import React, { useRef, useState } from 'react';
import {
  AddressText,
  ButtonList,
  Container,
  Content,
  HistoryContainer,
  HistoryItem,
  HistoryText,
  MainContent,
  NextButton,
  QrCodeButton,
  QrCodeImage,
  StarButton,
  StarImage,
} from '@/pages/SendAdress/index.styled';
import Header from '@/components/Header';
import CustomInput from '@/components/CustomInput';
import DoneStarIcon from 'public/assets/images/icons/wallet/done_star_icon.png';
import StarIcon from 'public/assets/images/icons/wallet/star_icon.png';
import { AddressItemType } from '@/pages/SendAdress/index.type';
import { Button, ListRenderItemInfo } from 'react-native';
import CustomButton from '@/components/CustomButton';
import QrIcon from 'public/assets/images/icons/wallet/qr_icon.png';
import BottomSheet from '@/components/BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useAtom } from 'jotai/index';
import { modalStateAtom } from '@/components/Modal';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';
import BottomSheetComponent from '@/components/BottomSheet';
import SendModal from '@/pages/SendAdress/_component/SendModal';

const Index = () => {
  const [address, setAddress] = useState<string>('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isModalState, setIsModalState] = useAtom(modalStateAtom);

  const handleModalPress = handlePresentModalPress(bottomSheetModalRef);

  const addressList = [
    {
      address: '0x8284F52A3369f23D8587fd90bDE6abfF9Be2665D',
      favorites: true,
    },
    {
      address: '0xd9699F448D9655f62cDf9D0eA03309a95234c53D',
      favorites: false,
    },
    {
      address: '0xaA179bC2b8719a38bEd90F9DF0b7E474A1eD9737',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
    {
      address: '0xa053195BD11738B50f27aE73F683936CEFA784C5',
      favorites: false,
    },
  ];

  return (
    <Container>
      <Content>
        <Header title={'보내기'} />
        <MainContent>
          <CustomInput
            value={address}
            setValue={setAddress}
            placeholder={'받는 분 지갑주소'}
            type={'border'}
            isError={false}
          />
          <HistoryText>최근내역</HistoryText>
          <HistoryContainer
            data={addressList}
            renderItem={({ item }: ListRenderItemInfo<AddressItemType>) => {
              return (
                <HistoryItem>
                  <AddressText numberOfLines={1} ellipsizeMode={'middle'}>
                    {item.address}
                  </AddressText>
                  <StarButton>
                    <StarImage
                      source={item.favorites ? DoneStarIcon : StarIcon}
                    />
                  </StarButton>
                </HistoryItem>
              );
            }}
          />
        </MainContent>
      </Content>
      <ButtonList>
        <QrCodeButton>
          <QrCodeImage source={QrIcon} />
        </QrCodeButton>
        <NextButton>
          <CustomButton
            onPress={handleModalPress}
            shadow={true}
            fullWidth
            text={'다음'}
            gradientColors={['#1BE0CD', '#47C8FC']}
          />
        </NextButton>
      </ButtonList>
      <BottomSheetComponent ref={bottomSheetModalRef}>
        <SendModal />
      </BottomSheetComponent>
    </Container>
  );
};

export default Index;
