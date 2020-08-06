import styled from 'styled-components';
import LogoStyle from '../LogoCovid/';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  padding: 20rem 0;
  border-top: 4px solid var(--color-primary-medium);

  & > ${LogoStyle} {
    margin-bottom: 15rem;
  }
`;

export default FooterStyle;
