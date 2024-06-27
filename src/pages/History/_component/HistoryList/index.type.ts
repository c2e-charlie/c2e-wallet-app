import { HistoryType } from '@/components/HistoryItem/index.type';

export interface HistoryListType {
  historyItem: HistoryType;
  beforeDate: number;
  storedBeforeDate: number;
}
