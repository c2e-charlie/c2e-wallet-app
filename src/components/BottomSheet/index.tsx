import React, { useMemo, forwardRef } from 'react';
import { View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  children: React.ReactNode;
}

const Index: React.ForwardRefRenderFunction<
  BottomSheetModal,
  BottomSheetProps
> = ({ children }, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);

  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View>{children}</View>
    </BottomSheetModal>
  );
};

export default forwardRef(Index);
