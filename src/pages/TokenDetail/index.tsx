import React from 'react';
import {
  Container,
  TokenText,
  TokenContainer,
  KrwText,
  ButtonList,
  ButtonContainer,
  HistoryContainer,
  HistoryList,
  ListItem,
  ListLeft,
  ListIcon,
  ListInfo,
  InfoText,
  StateText,
  ListRightText,
} from '@/pages/TokenDetail/index.styled';
import Header from '@/components/Header';
import CustomButton from '@/components/CustomButton';
import { HistoryText } from '@/pages/SendAdress/index.styled';
import Empty from '@/components/Empty';
import WithdrawIcon from 'public/assets/images/icons/wallet/withdraw_icon.png';
import DepositIcon from 'public/assets/images/icons/wallet/deposit_icon.png';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <TokenContainer>
        <TokenText>1000 BFC</TokenText>
        <KrwText>1원</KrwText>
        <ButtonList>
          <ButtonContainer>
            <CustomButton
              onPress={() =>
                navigation.navigate('WalletStack', { screen: 'Send' })
              }
              fullWidth
              shadow
              height={40}
              borderColor={'#8EB0FA'}
              borderWidth={1.5}
              backgroundColor={'#fff'}
              color={'#8EB0FA'}
              text={'보내기'}
            />
          </ButtonContainer>
          <ButtonContainer>
            <CustomButton
              onPress={() =>
                navigation.navigate('WalletStack', { screen: 'QrAddress' })
              }
              fullWidth
              shadow
              height={40}
              borderColor={'#8EB0FA'}
              borderWidth={1.5}
              backgroundColor={'#8EB0FA'}
              text={'받기'}
            />
          </ButtonContainer>
        </ButtonList>
      </TokenContainer>
      <HistoryContainer>
        <HistoryText>거래내역</HistoryText>
        <HistoryList
          data={demoData}
          ListEmptyComponent={<Empty />}
          renderItem={({ item }) => {
            return (
              <ListItem>
                <ListLeft>
                  <ListIcon
                    source={
                      item.type === 'deposit' ? DepositIcon : WithdrawIcon
                    }
                  />
                  <ListInfo>
                    <InfoText>
                      {item.type === 'deposit' ? '받기' : '보내기'}
                    </InfoText>
                    <StateText>
                      {item.state === 'SUCCESS' ? '성공' : '실패'}
                    </StateText>
                  </ListInfo>
                </ListLeft>
                <ListRightText>{item.amount}</ListRightText>
              </ListItem>
            );
          }}
        />
      </HistoryContainer>
    </Container>
  );
};

export default Index;

const demoData = [
  {
    state: 'SUCCESS',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'deposit', // 받기
  },
  {
    state: 'FAIL',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'withdraw', // 보내기
  },
  {
    state: 'PENDING',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'withdraw', // 보내기
  },
  {
    state: 'SUCCESS',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'deposit', // 받기
  },
  {
    state: 'FAIL',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'withdraw', // 보내기
  },
  {
    state: 'PENDING',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'withdraw', // 보내기
  },
  {
    state: 'SUCCESS',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'deposit', // 받기
  },
  {
    state: 'FAIL',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'withdraw', // 보내기
  },
  {
    state: 'PENDING',
    amount: '0.1234',
    date: '2021-09-01',
    type: 'withdraw', // 보내기
  },
];
