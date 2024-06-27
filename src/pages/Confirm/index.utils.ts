import { RefObject } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export const goToConfirm = (
  navigation: any,
  bottomSheetModalRef: RefObject<BottomSheetModal>,
) => {
  navigation.navigate('WalletStack', { screen: 'Confirm' });
  bottomSheetModalRef.current?.close();
};
