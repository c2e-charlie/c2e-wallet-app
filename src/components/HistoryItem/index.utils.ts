import DepositIcon from 'public/assets/images/icons/wallet/deposit_icon.png';
import WithdrawIcon from 'public/assets/images/icons/wallet/withdraw_icon.png';
import SwapIcon from 'public/assets/images/icons/wallet/swap_icon.png';
import MintingIcon from 'public/assets/images/icons/wallet/minting_icon.png';
import VendingIcon from 'public/assets/images/icons/wallet/vending_icon.png';
import PointIcon from 'public/assets/images/icons/wallet/history_point_icon.png';

export const transTypeDisplay = {
  deposit: '받기',
  withdraw: '보내기',
  TRANSFER: '전송',
  SWAP: '교환',
  POINT: '적립',
  MINTING: '민팅',
  VENDING: '자판기',
};

export const transStateDisplay = {
  SUCCESS: '성공',
  FAIL: '실패',
  PENDING: '대기 중',
};

export const transTypeIcon = {
  deposit: DepositIcon,
  withdraw: WithdrawIcon,
  TRANSFER: DepositIcon,
  SWAP: SwapIcon,
  POINT: PointIcon,
  MINTING: MintingIcon,
  VENDING: VendingIcon,
};
