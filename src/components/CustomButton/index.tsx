import styled from 'styled-components/native';

const CustomButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export default CustomButton;
