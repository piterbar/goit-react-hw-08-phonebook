import styled from 'styled-components';

export const ContactsTitle = styled.h2`
  text-shadow: ${p => p.theme.textShadow.standart};
  color: ${p => p.theme.colors.white};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Name = styled.span`
  margin-right: 215px;
`;
export const List = styled.ul`
  width: ${p => p.theme.space[9]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const ContactsListContainer = styled.div`
  display: flex;

  margin-top: ${p => p.theme.space[5]}px;
`;
