import React from 'react';
import {
  Balance,
  BalanceAmount,
  BalanceBottom,
  Container,
  BalanceMid,
  BalanceSettingImage,
  BalanceSettingTouchable,
  BalanceTitle,
  BalanceTop,
  C2EImage,
  PointAmount,
  PointContainer,
  PointImage,
  PointRight,
  PointTitle,
  RefreshImage,
  RefreshTouchable,
  SwapItem,
  TransactionItem,
  TransactionItemTitle,
} from '@/pages/Wallet/_components/Balance/index.styled';
import BalanceSettingIcon from 'public/assets/images/icons/wallet/balance_setting_icon.png';
import C2EIcon from 'public/assets/images/icons/wallet/c2e_icon.png';
import RefreshIcon from 'public/assets/images/icons/wallet/refresh_icon.png';
import PointIcon from 'public/assets/images/icons/wallet/point_icon.png';
// import { useNavigation } from '@react-navigation/native';

const Index = () => {
  // const navigation = useNavigation();
  const userName = '김둘리';
  const amount = 6.01;

  return (
    <Container>
      <Balance>
        <BalanceTop>
          <BalanceTitle>{userName}</BalanceTitle>
          <BalanceSettingTouchable>
            <BalanceSettingImage source={BalanceSettingIcon} />
          </BalanceSettingTouchable>
        </BalanceTop>
        <BalanceMid>
          <C2EImage source={C2EIcon} />
          <BalanceAmount>{amount} C2E</BalanceAmount>
          <RefreshTouchable>
            <RefreshImage source={RefreshIcon} />
          </RefreshTouchable>
        </BalanceMid>
        <BalanceBottom>
          <TransactionItem>
            <TransactionItemTitle>보내기</TransactionItemTitle>
          </TransactionItem>
          <TransactionItem>
            <TransactionItemTitle>받기</TransactionItemTitle>
          </TransactionItem>
          <SwapItem>
            <TransactionItemTitle>교환</TransactionItemTitle>
          </SwapItem>
        </BalanceBottom>
      </Balance>
      <PointContainer>
        <PointTitle>보유 포인트</PointTitle>
        <PointRight>
          <PointImage source={PointIcon} />
          <PointAmount>300</PointAmount>
        </PointRight>
      </PointContainer>
    </Container>
  );
};

export default Index;
