import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  margin-top: 10px;
  padding: 0 20px;
`;

export const SwapContainer = styled.View`
  padding: 18px 0 52px;
  border-radius: 26px;
  border: 1px solid #f0f3f8;
  background: #fff;
  box-shadow: 0 4px 10px #f0f0f3;
`;

export const TitleView = styled.View`
  padding: 0 20px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f0f3f8;
`;

export const Title = styled.Text`
  color: #444447;
  font-size: 18px;
  font-weight: 700;
`;

export const IconView = styled.View`
  margin-right: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 44px;
  height: 44px;
`;

export const OverlapIcon = styled.Image`
  width: 44px;
  height: 44px;
  position: absolute;
  left: 25;
`;

export const ContentContainer = styled.View`
  padding: 16px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputTitleView = styled.View`
  position: absolute;
  left: 15px;
  padding: 6px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  gap: 8px;
  border: 1px solid #f0f3f8;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
`;

export const InputTitle = styled.Text`
  color: #444447;
  font-size: 17px;
  font-weight: 700;
`;

export const InputIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

export const InputBox = styled.View`
  margin-top: 20px;
  z-index: -1;
`;

export const EmBox = styled.View`
  margin-top: 30px;
`;

export const SwapImage = styled.Image`
  position: absolute;
  top: -20%;
  left: 45%;
  width: 32px;
  height: 32px;
`;

export const C2eResultView = styled.View`
  padding: 26px 16px;
  width: 100%;
  border-radius: 18px;
  border: 1.5px solid #f0f3f8;
  background: #fbfcfe;
`;

export const C2eResultText = styled.Text<{ c2e: string }>`
  color: ${({ c2e }: { c2e: string }) => (c2e === '0' ? '#9ba1b1' : '#444447')};
  font-size: 22px;
  font-weight: 600;
`;

export const ExChangeText = styled.Text`
  margin: 16px 0;
  color: #8eb0fa;
  font-size: 16px;
  font-weight: 600;
`;

export const SwapInfoView = styled.View`
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const SwapInfoLeft = styled.Text`
  color: #9ba1b1;
  font-size: 14px;
  font-weight: 600;
`;

export const DailyLimitC2eView = styled.View`
  padding: 4px 8px;
  border-radius: 10px;
  background: rgba(142, 176, 250, 0.1);
`;

export const DailyLimitC2eText = styled.Text`
  color: #8eb0fa;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
`;

export const DailyC2e = styled.Text`
  padding: 4px 8px;
  color: #9ba1b1;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
`;
