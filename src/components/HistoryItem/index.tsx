import React from 'react';
import {
  Container,
  InfoText,
  ListIcon,
  ListInfo,
  ListLeft,
  ListRightView,
  StateText,
  TimeText,
  TokenText,
} from '@/components/HistoryItem/index.styled';
import { HistoryType } from '@/components/HistoryItem/index.type';
import {
  transStateDisplay,
  transTypeDisplay,
  transTypeIcon,
} from '@/components/HistoryItem/index.utils';
import { formatNumber } from '@/utils/utils';

const Index = ({
  TokenInfo,
  goDetail,
}: {
  TokenInfo: HistoryType;
  goDetail?: () => void;
}) => {
  return (
    <Container onPress={() => goDetail!()}>
      <ListLeft>
        <ListIcon source={transTypeIcon[TokenInfo.transType]} />
        <ListInfo>
          <InfoText>{transTypeDisplay[TokenInfo.transType]}</InfoText>
          <StateText>{transStateDisplay[TokenInfo.transState]}</StateText>
        </ListInfo>
      </ListLeft>
      <ListRightView>
        <TokenText>{formatNumber(TokenInfo.balance)} C2E</TokenText>
        <TimeText>
          {new Date(TokenInfo.confirmAt)
            .getHours()
            .toString()
            .padStart(2, '0') +
            ':' +
            new Date(TokenInfo.confirmAt)
              .getMinutes()
              .toString()
              .padStart(2, '0')}
        </TimeText>
      </ListRightView>
    </Container>
  );
};

export default Index;
