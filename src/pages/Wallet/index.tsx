import React from 'react';
import { Container, WalletContainer } from '@/pages/Wallet/index.styled';
import Header from '@/pages/Wallet/_components/Header';
import PanelSection from '@/pages/Wallet/_components/PanelSection';
import Balance from '@/pages/Wallet/_components/Balance';

const Wallet = () => {
  return (
    <Container>
      <Header title={'내 지갑'} />
      <WalletContainer>
        <Balance />
        <PanelSection />
      </WalletContainer>
    </Container>
  );
};

export default Wallet;
