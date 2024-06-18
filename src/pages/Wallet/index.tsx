import React from 'react';
import {
  Balance,
  BalanceAmount,
  BalanceAmountContainer,
  BalanceContainer,
  BalanceSettingImage,
  BalanceSettingTouchable,
  BalanceTitle,
  BalanceTitleContainer,
  C2EImage,
  Container,
  Point,
  PointAmount,
  PointContainer,
  PointImage,
  PointTitle,
  RefreshImage,
  RefreshTouchable,
  SwapItem,
  TransactionContainer,
  TransactionItem,
  TransactionItemTitle,
  WalletContainer,
} from '@/pages/Wallet/index.styled';
import Header from '@/pages/Wallet/_components/Header';
import { Image, View } from 'react-native';
import BalanceSettingIcon from 'public/assets/images/icons/wallet/balance_setting_icon.png';
import C2EIcon from 'public/assets/images/icons/wallet/c2e_icon.png';
import RefreshIcon from 'public/assets/images/icons/wallet/refresh_icon.png';
import PointIcon from 'public/assets/images/icons/wallet/point_icon.png';

const Wallet = () => {
  const userName = '김둘리';
  const amount = 6.01;

  return (
    <Container>
      <Header />
      <WalletContainer>
        <BalanceContainer>
          <Balance>
            <BalanceTitleContainer>
              <BalanceTitle>{userName}의 지갑</BalanceTitle>
              <BalanceSettingTouchable>
                <BalanceSettingImage source={BalanceSettingIcon} />
              </BalanceSettingTouchable>
            </BalanceTitleContainer>
            <BalanceAmountContainer>
              <C2EImage source={C2EIcon} />
              <BalanceAmount>{amount} C2E</BalanceAmount>
              <RefreshTouchable>
                <RefreshImage source={RefreshIcon} />
              </RefreshTouchable>
            </BalanceAmountContainer>
            <TransactionContainer>
              <TransactionItem>
                <TransactionItemTitle>보내기</TransactionItemTitle>
              </TransactionItem>
              <TransactionItem>
                <TransactionItemTitle>받기</TransactionItemTitle>
              </TransactionItem>
              <SwapItem>
                <TransactionItemTitle>교환</TransactionItemTitle>
              </SwapItem>
            </TransactionContainer>
          </Balance>
          <PointContainer>
            <Point>
              <PointTitle>보유 포인트</PointTitle>
              <View>
                <PointImage source={PointIcon} />
                <PointAmount>300</PointAmount>
              </View>
            </Point>
          </PointContainer>
        </BalanceContainer>
      </WalletContainer>
    </Container>
  );
};

export default Wallet;
