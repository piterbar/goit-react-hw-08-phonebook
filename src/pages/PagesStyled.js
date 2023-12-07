import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: ${p => p.theme.space[5]}px;
`;
export const Message = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  opacity: 0.9;
  background-color: ${p => p.theme.colors.background};
  text-shadow: ${p => p.theme.textShadow.standart};
`;
export const Box = styled.div`
  background-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
