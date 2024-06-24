import styled from 'styled-components/native';

export const PasswordContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.c2e_white_01};
  justify-content: space-between;
`;

export const PasswordView = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const PasswordUpperSection = styled.View`
  align-items: center;
  margin-top: 120px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.c2e_black_01};
  font-weight: 700;
  line-height: 30px;
`;

export const RenderCellContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const RenderCellContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const RandomKeyPadView = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const PasswordAlertView = styled.View<{
  checkPassword?: boolean;
  checkPasscode?: boolean;
}>`
  align-items: center;
  margin-top: 16px;
  display: ${({ checkPassword, checkPasscode }) =>
    checkPassword || checkPasscode ? 'flex' : 'none'};
`;

export const AlertText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.c2e_red_01};
  line-height: 20px;
`;

export const FailureCountText = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.c2e_red_02};
  line-height: 20px;
`;

// export cons
