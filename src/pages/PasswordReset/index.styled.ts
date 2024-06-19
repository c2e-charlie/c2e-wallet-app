import styled from 'styled-components/native';

export const ResetView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.c2e_white_01};
  padding: 100px 20px 0 20px;
  justify-content: space-between;
`;

export const TitleView = styled.View`
  margin-bottom: 14px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.c2e_black_01};
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.c2e_gray_02};
`;
