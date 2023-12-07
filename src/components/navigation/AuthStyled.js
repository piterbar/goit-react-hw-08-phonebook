import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accentText};
  padding-left: 5px;
  &.active {
    color: ${p => p.theme.colors.white};
  }
`;
