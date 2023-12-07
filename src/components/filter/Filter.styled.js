import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  color: ${p => p.theme.colors.accentText};
  justify-content: center;
`;

export const FilterInput = styled.input`
  width: 800px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  box-shadow: 2px 4px rgba(0, 0, 0, 0.25);
`;
