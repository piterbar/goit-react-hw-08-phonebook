import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Avatar = styled.img`
  margin-right: 4px;
`;

export const Greeting = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentText};
`;

export const Btn = styled(Button)`
  margin-right: 4px;
`;
