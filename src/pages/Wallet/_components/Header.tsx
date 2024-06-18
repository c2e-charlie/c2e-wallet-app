import React from 'react';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderUserImage,
  HeaderUserName,
  SettingIconImage,
  SettingTouchable,
} from '@/pages/Wallet/index.styled';
import SettingIcon from 'public/assets/images/icons/wallet/setting_icon.png';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderUserImage alt={'유저 이미지'} />
        <HeaderUserName>username</HeaderUserName>
      </HeaderLeft>
      <SettingTouchable>
        <SettingIconImage source={SettingIcon} alt={'설정 아이콘'} />
      </SettingTouchable>
    </HeaderContainer>
  );
};
export default Header;
