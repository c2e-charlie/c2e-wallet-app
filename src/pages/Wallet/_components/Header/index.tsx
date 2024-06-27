import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  IconTouchable,
  IconImage,
  HeaderRight,
} from '@/pages/Wallet/_components/Header/index.styled';
import { HeaderProps } from '@/pages/Wallet/_components/Header/index.type';
import SettingIcon from 'public/assets/images/icons/wallet/setting_icon.png';
import Alarm from 'public/assets/images/icons/wallet/alarm_icon.png';

const Index = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRight>
        <IconTouchable>
          <IconImage source={Alarm} alt={'알람 아이콘'} />
        </IconTouchable>
        <IconTouchable>
          <IconImage source={SettingIcon} alt={'설정 아이콘'} />
        </IconTouchable>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Index;
