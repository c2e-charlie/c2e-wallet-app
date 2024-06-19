import React from 'react';
import {
  TabBottomView,
  Container,
  TabText,
  TabTouchable,
  TabSection,
  TokenAmount,
  TokenImage,
  TokenItem,
  TokenKRW,
  TokenLeft,
  TokenName,
  TokenRight,
} from '@/pages/Wallet/_components/PanelSection/index.styled';
import BfcIcon from 'public/assets/images/icons/wallet/bfc_icon.png';
import UsdtIcon from 'public/assets/images/icons/wallet/usdt_icon.png';

const Index = () => {
  const [activeTab, setActiveTab] = React.useState('토큰');
  const tabList = ['토큰', 'NFT'];
  const tokenList = [
    {
      icon: BfcIcon,
      symbol: 'BFC',
      value: 999,
    },
    {
      icon: UsdtIcon,
      symbol: 'USDT',
      value: 999,
    },
  ];

  return (
    <Container>
      <TabSection>
        {tabList.map((tabItem, key) => {
          return (
            <TabTouchable
              onPress={() => setActiveTab(tabItem)}
              key={key}
              active={tabItem === activeTab}>
              <TabText active={tabItem === activeTab}>{tabItem}</TabText>
            </TabTouchable>
          );
        })}
      </TabSection>
      <TabBottomView>
        {tokenList.map((tokenInfoItem, key) => {
          return (
            <TokenItem key={key}>
              <TokenLeft>
                <TokenImage source={tokenInfoItem.icon} />
                <TokenName>{tokenInfoItem.symbol}</TokenName>
              </TokenLeft>
              <TokenRight>
                <TokenAmount>
                  {tokenInfoItem.value} {tokenInfoItem.symbol}
                </TokenAmount>
                <TokenKRW>482,666원</TokenKRW>
              </TokenRight>
            </TokenItem>
          );
        })}
      </TabBottomView>
    </Container>
  );
};

export default Index;
