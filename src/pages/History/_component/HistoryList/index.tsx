import React from 'react';
import HistoryItem from '@/components/HistoryItem';
import {
  Container,
  DateText,
} from '@/pages/History/_component/HistoryList/index.styled';
import { HistoryListType } from '@/pages/History/_component/HistoryList/index.type';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigations/index.type';

const Index = ({
  historyItem,
  beforeDate,
  storedBeforeDate,
}: HistoryListType) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const date = new Date(historyItem.confirmAt);

  const goDetail = () => {
    navigation.navigate('WalletStack', {
      screen: 'HistoryDetail',
      params: { historyItem: historyItem },
    });
  };

  return (
    <Container>
      {beforeDate !== storedBeforeDate && (
        <DateText>
          {date.getFullYear() +
            '년 ' +
            (date.getMonth() + 1) +
            '월 ' +
            date.getDate() +
            '일'}
        </DateText>
      )}
      <HistoryItem TokenInfo={historyItem} goDetail={goDetail} />
    </Container>
  );
};

export default Index;
