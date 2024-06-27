import React from 'react';
import {
  BalanceText,
  Container,
  Content,
  DetailItem,
  DetailView,
  ItemLeft,
  ItemRight,
  State,
  Title,
  TitleIcon,
  TitleLeft,
  TitleView,
  TxId,
} from '@/pages/HistoryDetail/index.styled';
import Header from '@/components/Header';
import { transTypeIcon } from '@/components/HistoryItem/index.utils';
import { Props } from '@/pages/HistoryDetail/index.type';

const Index: React.FC<Props> = ({ route }) => {
  const historyItem = route!.params.historyItem;

  return (
    <Container>
      <Header title={'상세내역'} />
      <Content>
        <TitleView>
          <TitleLeft>
            <Title>보내기</Title>
            <State>성공</State>
          </TitleLeft>
          <TitleIcon source={transTypeIcon[historyItem.transType]} />
        </TitleView>
        <BalanceText>-200 C2E</BalanceText>
        <DetailView>
          <DetailItem>
            <ItemLeft>시간</ItemLeft>
            <ItemRight>
              {new Date(historyItem.confirmAt).toLocaleString('ko-KR', {
                year: '2-digit',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </ItemRight>
          </DetailItem>
          <DetailItem>
            <ItemLeft>보내는 사람</ItemLeft>
            <ItemRight numberOfLines={1} ellipsizeMode={'middle'}>
              {historyItem.tokenAddress}
            </ItemRight>
          </DetailItem>
          <DetailItem>
            <ItemLeft>받는 사람</ItemLeft>
            <ItemRight numberOfLines={1} ellipsizeMode={'middle'}>
              {historyItem.tokenAddress}
            </ItemRight>
          </DetailItem>
          <DetailItem>
            <ItemLeft>네트워크</ItemLeft>
            <ItemRight>Ethereum</ItemRight>
          </DetailItem>
          <DetailItem>
            <ItemLeft>가스비</ItemLeft>
            <ItemRight>0 C2E</ItemRight>
          </DetailItem>
          <DetailItem>
            <ItemLeft>TX ID</ItemLeft>
            <TxId numberOfLines={1} ellipsizeMode={'middle'}>
              fdsfsadfdsafsadlkfjeakjfiela;skdvjeila;smkkljkl
            </TxId>
          </DetailItem>
        </DetailView>
      </Content>
    </Container>
  );
};

export default Index;
