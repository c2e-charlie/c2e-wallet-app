import React, { useRef } from 'react';
import { Container, WalletContainer } from '@/pages/Wallet/index.styled';
import Header from '@/pages/Wallet/_components/Header';
import PanelSection from '@/pages/Wallet/_components/PanelSection';
import Balance from '@/pages/Wallet/_components/Balance';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { handlePresentModalPress } from '@/components/BottomSheet/index.utils';
import BottomSheetComponent from '@/components/BottomSheet';
import HistoryModal from '@/pages/Wallet/_components/HistoryModal';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handleModalPress = handlePresentModalPress(bottomSheetModalRef);

  return (
    <Container>
      <Header title={'내 지갑'} />
      <WalletContainer>
        <Balance handleModalPress={handleModalPress} />
        <PanelSection />
      </WalletContainer>
      <BottomSheetComponent ref={bottomSheetModalRef} snapPoint={['35%']}>
        <HistoryModal
          navigation={navigation}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </BottomSheetComponent>
    </Container>
  );
};

export default Wallet;
