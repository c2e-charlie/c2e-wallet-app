import {
  c2e_icon,
  quest_icon,
  wallet_icon,
  community_icon,
  c2e_focus_icon,
  vending_machine_icon,
} from '../../../public/assets/images/icons/navigation';

export const height = 55; // svg 높이
export const upperBorderRadius = 20;

export const icons = {
  Home: {
    focus: c2e_focus_icon,
    notFocus: c2e_icon,
  },
  Quest: {
    focus: quest_icon,
    notFocus: quest_icon,
  },
  Wallet: {
    focus: wallet_icon,
    notFocus: wallet_icon,
  },
  Community: {
    focus: community_icon,
    notFocus: community_icon,
  },
  VendingMachine: {
    focus: vending_machine_icon,
    notFocus: vending_machine_icon,
  },
};
