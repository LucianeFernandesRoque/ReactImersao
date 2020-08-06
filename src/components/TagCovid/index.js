import styled, { css } from 'styled-components';

const TagCovid = styled.h2`
  display: inline-block;
  font-size: 55rem;
  letter-spacing: 2rem;
  background-color: var(--color-codandofeliz);
  padding: 20rem 18rem;
  color: var(--color-gray-light);

  ${({ small }) =>
    small &&
    css`
      font-size: 25rem;
      padding: 8rem 10rem;
    `};
`;

export default TagCovid;
