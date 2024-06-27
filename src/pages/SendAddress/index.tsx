import React, { useEffect, useRef, useState } from 'react';
import {
  AddressText,
  AddressTouchable,
  ButtonList,
  Container,
  Content,
  DeleteButton,
  HistoryContainer,
  HistoryHeader,
  HistoryItem,
  HistoryText,
  MainContent,
  NextButton,
  QrCodeButton,
  QrCodeImage,
  StarButton,
  StarImage,
} from '@/pages/SendAddress/index.styled';
import Header from '@/components/Header';
import CustomInput from '@/components/CustomInput';
import DoneStarIcon from 'public/assets/images/icons/wallet/done_star_icon.png';
import StarIcon from 'public/assets/images/icons/wallet/star_icon.png';
import { AddressItemType, Props } from '@/pages/SendAddress/index.type';
import { ListRenderItemInfo } from 'react-native';
import CustomButton from '@/components/CustomButton';
import QrIcon from 'public/assets/images/icons/wallet/qr_icon.png';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';
import BottomSheetComponent from '@/components/BottomSheet';
import SendModal from '@/pages/SendAddress/_component/SendModal';
import { useNavigation } from '@react-navigation/native';
import CloseIcon from 'public/assets/images/icons/wallet/close_icon.png';
import Empty from '@/components/Empty';
import { checkAddress, isDeleteActive } from '@/pages/SendAddress/index.utils';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigations/index.type';

const Index: React.FC<Props> = ({ route }) => {
  const { qrScanAddress, quantity } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [address, setAddress] = useState<string>('');
  const [isAddressError, setIsAddressError] = useState<boolean>(false);
  const [isDeleteState, setIsDeleteState] = useState<boolean>(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handleModalPress = handlePresentModalPress(bottomSheetModalRef);

  useEffect(() => {
    if (qrScanAddress) {
      setAddress(qrScanAddress);
      handleModalPress();
    }
  }, [qrScanAddress]);

  useEffect(() => {
    checkAddress(address, setIsAddressError);
  }, [address]);

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
            isError={isAddressError}
          />
          <HistoryHeader>
            <HistoryText>최근내역</HistoryText>
            <DeleteButton
              onPress={() => isDeleteActive(isDeleteState, setIsDeleteState)}>
              <HistoryText>삭제</HistoryText>
            </DeleteButton>
          </HistoryHeader>
          <HistoryContainer
            data={addressList}
            ListEmptyComponent={<Empty />}
            renderItem={({ item }: ListRenderItemInfo<AddressItemType>) => (
              <HistoryItem>
                <AddressTouchable onPress={() => setAddress(item.address)}>
                  <AddressText numberOfLines={1} ellipsizeMode={'middle'}>
                    {item.address}
                  </AddressText>
                </AddressTouchable>
                <StarButton>
                  {isDeleteState ? (
                    <StarImage source={CloseIcon} />
                  ) : (
                    <StarImage
                      source={item.favorites ? DoneStarIcon : StarIcon}
                    />
                  )}
                </StarButton>
              </HistoryItem>
            )}
          />
        </MainContent>
      </Content>
      <ButtonList>
        <QrCodeButton
          onPress={() =>
            navigation.navigate('WalletStack', {
              screen: 'QrScanner',
              params: quantity,
            })
          }>
          <QrCodeImage source={QrIcon} />
        </QrCodeButton>
        <NextButton>
          <CustomButton
            onPress={handleModalPress}
            shadow={true}
            fullWidth
            text={'다음'}
            disabled={isAddressError || address.length < 42}
            gradientColors={['#1BE0CD', '#47C8FC']}
          />
        </NextButton>
      </ButtonList>
      <BottomSheetComponent ref={bottomSheetModalRef}>
        <SendModal
          quantity={quantity}
          address={address}
          navigation={navigation}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </BottomSheetComponent>
    </Container>
  );
};

export default Index;

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
