import React from 'react';
import { Container, List } from '@/pages/History/_component/Coin/index.styled';
import HistoryList from '@/pages/History/_component/HistoryList';
import { HistoryType } from '@/components/HistoryItem/index.type';

const Index = () => {
  let storedBeforeDate: number = 0;

  return (
    <Container>
      <List
        data={demoData}
        renderItem={({ item, key }: { item: HistoryType; key: number }) => {
          const date = new Date(item.confirmAt);
          const beforeDate = storedBeforeDate;
          storedBeforeDate = date.getDate();
          return (
            <HistoryList
              historyItem={item}
              key={key}
              beforeDate={beforeDate}
              storedBeforeDate={storedBeforeDate}
            />
          );
        }}
      />
    </Container>
  );
};

export default Index;

const demoData = [
  {
    id: 7397,
    transType: 'VENDING',
    balance: '20',
    transState: 'FAIL',
    tokenAddress: null,
    confirmAt: '2024-06-17T02:28:52.203Z',
  },
  {
    id: 7392,
    transType: 'VENDING',
    balance: '20',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-06-17T02:28:33.492Z',
  },
  {
    id: 39615,
    transType: 'SWAP',
    balance: '0.0033',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-06-10T09:41:34.659Z',
  },
  {
    id: 36447,
    transType: 'SWAP',
    balance: '9.80966523',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-06-05T00:12:10.338Z',
  },
  {
    id: 3689,
    transType: 'VENDING',
    balance: '3',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-31T00:57:43.171Z',
  },
  {
    id: 3574,
    transType: 'MINTING',
    balance: '0',
    transState: 'SUCCESS',
    tokenAddress: '0xac6a77C5e4FF006619b639f0eb575c6C2E157A54',
    confirmAt: '2024-05-30T08:09:19.199Z',
  },
  {
    id: 2747,
    transType: 'MINTING',
    balance: '0',
    transState: 'SUCCESS',
    tokenAddress: '0xac6a77C5e4FF006619b639f0eb575c6C2E157A54',
    confirmAt: '2024-05-27T04:22:19.963Z',
  },
  {
    id: 2722,
    transType: 'TRANSFER',
    balance: '30',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-27T01:20:14.784Z',
  },
  {
    id: 2710,
    transType: 'MINTING',
    balance: '0',
    transState: 'SUCCESS',
    tokenAddress: '0xac6a77C5e4FF006619b639f0eb575c6C2E157A54',
    confirmAt: '2024-05-27T01:06:25.363Z',
  },
  {
    id: 2681,
    transType: 'MINTING',
    balance: '0',
    transState: 'SUCCESS',
    tokenAddress: '0xac6a77C5e4FF006619b639f0eb575c6C2E157A54',
    confirmAt: '2024-05-27T00:48:11.616Z',
  },
  {
    id: 2655,
    transType: 'MINTING',
    balance: '0',
    transState: 'SUCCESS',
    tokenAddress: '0xac6a77C5e4FF006619b639f0eb575c6C2E157A54',
    confirmAt: '2024-05-27T00:40:43.415Z',
  },
  {
    id: 2621,
    transType: 'MINTING',
    balance: '0',
    transState: 'SUCCESS',
    tokenAddress: '0xac6a77C5e4FF006619b639f0eb575c6C2E157A54',
    confirmAt: '2024-05-27T00:31:13.137Z',
  },
  {
    id: 31074,
    transType: 'SWAP',
    balance: '9.60254764',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-27T00:19:40.594Z',
  },
  {
    id: 209,
    transType: 'TRANSFER',
    balance: '1.5',
    transState: 'SUCCESS',
    tokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    confirmAt: '2024-05-17T01:26:59.110Z',
  },
  {
    id: 182,
    transType: 'TRANSFER',
    balance: '0.1',
    transState: 'SUCCESS',
    tokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    confirmAt: '2024-05-17T01:07:48.249Z',
  },
  {
    id: 25058,
    transType: 'SWAP',
    balance: '9.85780849',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-17T00:21:11.249Z',
  },
  {
    id: 23,
    transType: 'TRANSFER',
    balance: '9',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-16T09:51:15.965Z',
  },
  {
    id: 17,
    transType: 'TRANSFER',
    balance: '0.1',
    transState: 'SUCCESS',
    tokenAddress: '0xaA179bC2b8719a38bEd90F9DF0b7E474A1eD9737',
    confirmAt: '2024-05-16T09:17:00.226Z',
  },
  {
    id: 16,
    transType: 'TRANSFER',
    balance: '1',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-16T09:16:24.440Z',
  },
  {
    id: 15,
    transType: 'TRANSFER',
    balance: '0.1',
    transState: 'SUCCESS',
    tokenAddress: '0xaA179bC2b8719a38bEd90F9DF0b7E474A1eD9737',
    confirmAt: '2024-05-16T09:10:08.738Z',
  },
  {
    id: 6,
    transType: 'TRANSFER',
    balance: '5',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-16T03:32:02.992Z',
  },
  {
    id: 4,
    transType: 'VENDING',
    balance: '3',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-16T03:25:07.248Z',
  },
  {
    id: 3,
    transType: 'TRANSFER',
    balance: '0.1',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-16T03:23:56.721Z',
  },
  {
    id: 23543,
    transType: 'SWAP',
    balance: '9.82735419',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-05-14T00:24:06.849Z',
  },
  {
    id: 12073,
    transType: 'SWAP',
    balance: '8.27748095',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-04-24T01:32:35.176Z',
  },
  {
    id: 8859,
    transType: 'SWAP',
    balance: '4.21735907',
    transState: 'SUCCESS',
    tokenAddress: '0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF',
    confirmAt: '2024-04-16T07:53:39.818Z',
  },
];
