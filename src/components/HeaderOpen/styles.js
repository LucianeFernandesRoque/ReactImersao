import styled from 'styled-components';
import ButtonCovid from '../ButtomCovid';
import LogoCovid from '../LogoCovid';

export const HeaderCovid = styled.header`
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);
  padding: 20rem 30rem;

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;

    & > ${LogoCovid} {
      height: 35px;
    }

    & > ${ButtonCovid} {
      background-color: var(--color-primary-medium);
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;
