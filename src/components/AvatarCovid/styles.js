import styled from 'styled-components';

export const Channel = styled.figcaption`
  font-size: 20rem;
  color: var(--color-gray-light);
  text-shadow: 2px 2px 2px var(--color-black-medium);
  font-weight: bold;
`;

export const Avatar = styled.img`
  --space: 10rem;

  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  border: 4rem solid var(--color-black-medium);
`;

export const WrapperAvatar = styled.figure`
  display: flex;
  align-items: center;
`;
