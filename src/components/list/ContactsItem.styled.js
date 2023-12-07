import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const ContactsItem = styled.li`
  margin-left: ${p => p.theme.space[0]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const ItemWrap = styled.div`
  width: calc(100% / 2);
`;

export const DeleteButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const Wrapp = styled.div`
  display: flex;
  height: 40px;
  padding: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[0]}px;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 4px rgba(0, 0, 0, 0.25);

  & + & {
    margin-top: 10px;
  }
`;
