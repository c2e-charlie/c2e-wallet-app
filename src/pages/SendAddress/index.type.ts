import { RouteProp } from '@react-navigation/native';

export interface AddressItemType {
  address: string;
  favorites: boolean;
}

type StackParamList = {
  SendAddress: {
    qrScanAddress: string;
    quantity: string;
  };
};

type SendAddressRouteProp = RouteProp<StackParamList, 'SendAddress'>;

export type Props = {
  route?: SendAddressRouteProp;
};
