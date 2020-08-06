import styled from 'styled-components';
import container from '../../Tools/container';
import TagCovid from '../TagCovid';
import TitleCovid from '../TitleCovid';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;
  ${TagCovid} {
    margin-bottom: 40rem;
  }

  ${TitleCovid} {
    margin-bottom: 20rem;
  }
`;

export const BannerCovid = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
`;
