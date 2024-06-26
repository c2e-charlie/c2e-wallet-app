import { HistoryType } from '@/components/HistoryItem/index.type';
import { RouteProp } from '@react-navigation/native';

type StackParamList = {
  HistoryDetail: { historyItem: HistoryType };
};

type HistoryDetailRouteProp = RouteProp<StackParamList, 'HistoryDetail'>;

export type Props = {
  route: HistoryDetailRouteProp;
};
