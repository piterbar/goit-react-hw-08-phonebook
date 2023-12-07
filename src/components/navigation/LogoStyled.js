import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => p.theme.textShadow.standart};
  :hover {
    color: ${p => p.theme.colors.accentText};
  }
`;
