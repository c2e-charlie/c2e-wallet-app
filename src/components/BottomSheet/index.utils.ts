import { useCallback } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export const handlePresentModalPress = (
  bottomSheetModalRef: React.RefObject<BottomSheetModal>,
) => {
  return useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
};
export const handleDismissModalPress = (
  bottomSheetModalRef: React.RefObject<BottomSheetModal>,
) => {
  return useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
};
