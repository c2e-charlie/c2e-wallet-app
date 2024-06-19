import React, { useMemo, forwardRef, useCallback } from 'react';
import { View } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  children: React.ReactNode;
  pressBehavior?: 'close' | 'collapse';
  enablePanDownToClose?: boolean;
  snapPoint?: string[];
}

const Index: React.ForwardRefRenderFunction<
  BottomSheetModal,
  BottomSheetProps
> = (
  {
    children,
    pressBehavior = 'close',
    enablePanDownToClose = true,
    snapPoint = ['50%'],
  },
  ref,
) => {
  const snapPoints = useMemo(() => snapPoint, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={pressBehavior}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={enablePanDownToClose}
      backdropComponent={renderBackdrop}>
      <View>{children}</View>
    </BottomSheetModal>
  );
};

export default forwardRef(Index);
