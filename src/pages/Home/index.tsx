import React, { useState } from 'react';
import {
  C2eResultText,
  C2eResultView,
  Container,
  Content,
  ContentContainer,
  DailyC2e,
  DailyLimitC2eText,
  DailyLimitC2eView,
  EmBox,
  ExChangeText,
  Icon,
  IconView,
  InputBox,
  InputContainer,
  InputIcon,
  InputTitle,
  InputTitleView,
  OverlapIcon,
  SwapContainer,
  SwapImage,
  SwapInfoLeft,
  SwapInfoView,
  Title,
  TitleView,
} from '@/pages/Home/index.styled';
import Header from '@/pages/Wallet/_components/Header';
import PointIcon from 'public/assets/images/icons/home/point_icon.png';
import C2EIcon from 'public/assets/images/icons/home/c2e_icon.png';
import SwapIcon from 'public/assets/images/icons/home/swap_icon.png';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import Modal from '@/components/Modal';
import ErrorModal from '@/pages/Home/_components/ErrorModal';

const Home = () => {
  const [point, setPoint] = useState<string>('');
  const [c2e, setC2e] = useState<string>('0');
  const [isModalState, setIsModalState] = useState<boolean>(true);

  return (
    <Container>
      <Header title={'교환하기'} />
      <Content>
        <SwapContainer>
          <TitleView>
            <IconView>
              <Icon source={PointIcon} />
              <OverlapIcon source={C2EIcon} />
            </IconView>
            <Title>POINT/C2E</Title>
          </TitleView>
          <ContentContainer>
            <InputContainer>
              <InputTitleView>
                <InputIcon source={PointIcon} />
                <InputTitle>POINT</InputTitle>
              </InputTitleView>
              <InputBox>
                <CustomInput
                  value={point}
                  setValue={setPoint}
                  placeholder={'0'}
                  type={'fill'}
                  isError={false}
                />
              </InputBox>
            </InputContainer>
            <EmBox />
            <InputContainer>
              <SwapImage source={SwapIcon} />
              <InputTitleView>
                <InputIcon source={C2EIcon} />
                <InputTitle>C2E</InputTitle>
              </InputTitleView>
              <InputBox>
                <C2eResultView>
                  <C2eResultText c2e={c2e}>{c2e}</C2eResultText>
                </C2eResultView>
              </InputBox>
            </InputContainer>
            <ExChangeText>1 POINT = 0.0017 C2E</ExChangeText>
            <CustomButton
              text={'교환'}
              fullWidth
              disabled={c2e === '0'}
              gradientColors={['#1BE0CD', '#47C8FC']}
            />
          </ContentContainer>
          <SwapInfoView>
            <SwapInfoLeft>하루 최대 교환 수량</SwapInfoLeft>
            <DailyLimitC2eView>
              <DailyLimitC2eText>12 C2E</DailyLimitC2eText>
            </DailyLimitC2eView>
          </SwapInfoView>
          <SwapInfoView>
            <SwapInfoLeft>오늘 교환한 코인</SwapInfoLeft>
            <DailyC2e>0 C2E</DailyC2e>
          </SwapInfoView>
        </SwapContainer>
      </Content>
      <Modal isModalState={isModalState}>
        <ErrorModal closeModal={() => setIsModalState(false)} />
      </Modal>
    </Container>
  );
};

export default Home;
