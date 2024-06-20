import styled from 'styled-components/native';

export const ArrowIcon = styled(Image)<{ required: boolean }>`
  display: ${props => (props.required ? 'flex' : 'none')};
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;
