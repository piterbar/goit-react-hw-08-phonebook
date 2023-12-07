import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const StyledButton = styled(Button)`
  margin-right: ${p => p.theme.space[3]}px;
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
  margin-bottom: 15px;
  color: ${p => p.theme.colors.accentText};
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  font-weight: 700;
  color: #2a363b;
`;
export const Container = styled.div`
  min-height: 529px;
`;

export const Greeting = styled.div`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[5]}px;
`;
