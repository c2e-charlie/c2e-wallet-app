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
  TransactionItem,
  ButtonImage,
} from '@/pages/Wallet/_components/Balance/index.styled';
import BalanceSettingIcon from 'public/assets/images/icons/wallet/balance_setting_icon.png';
import C2EIcon from 'public/assets/images/icons/wallet/c2e_icon.png';
import RefreshIcon from 'public/assets/images/icons/wallet/refresh_icon.png';
import { useNavigation } from '@react-navigation/native';
import PointIcon from 'public/assets/images/icons/wallet/point_icon.png';
import ButtonReceiveIcon from 'public/assets/images/icons/wallet/button_receive_icon.png';
import ButtonSendIcon from 'public/assets/images/icons/wallet/button_send_icon.png';
import ButtonSwapIcon from 'public/assets/images/icons/wallet/button_swap_Image.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigations/index.type';

const Index = ({ handleModalPress }: { handleModalPress: () => void }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const userName = '김둘리';
  const amount = 6.01;

  return (
    <Container>
      <Balance>
        <BalanceTop>
          <BalanceTitle>{userName}</BalanceTitle>
          <BalanceSettingTouchable onPress={handleModalPress}>
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
          <TransactionItem
            onPress={() =>
              navigation.navigate('WalletStack', { screen: 'Send' })
            }>
            <ButtonImage source={ButtonSendIcon} />
          </TransactionItem>
          <TransactionItem
            onPress={() =>
              navigation.navigate('WalletStack', { screen: 'QrAddress' })
            }>
            <ButtonImage source={ButtonReceiveIcon} />
          </TransactionItem>
          <TransactionItem>
            <ButtonImage source={ButtonSwapIcon} />
          </TransactionItem>
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
