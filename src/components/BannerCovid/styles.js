import styled from 'styled-components';

import TagCovid from '../TagCovid';
import TitleCovid from '../TitleCovid';
import container from '../../Tools/container';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  & > ${TitleCovid} {
    margin-bottom: 20rem;
  }
  & > ${TagCovid} {
    box-sizing: border-box;
    padding: 15rem 12rem;
    margin-bottom: 20rem;
    font-size: 36rem;
    width: 100%;
  }
`;

export const BannerStyle = styled.section`
  ${container};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
`;
