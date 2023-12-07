import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export const SignUpBtn = styled(Button)`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Greeting = styled.div`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Form = styled.form`
  width: 320px;
  margin-left: 250px;
  margin-top: 200px;
`;
export const Input = styled.input`
  width: 250px;
  border-radius: ${p => p.theme.radii.normal};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentText};
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: #2a363b;
`;
