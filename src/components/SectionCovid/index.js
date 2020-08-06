import styled from 'styled-components';
import container from '../../Tools/container';
import TagCovid from '../TagCovid';
import DescriptionCovid from '../DescriptionCovid';

const SectionCovid = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50rem;

  & > ${TagCovid} {
    margin-bottom: 40rem;
  }

  & > ${TagCovid}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }

  & > ${DescriptionCovid} {
    max-width: 600px;
    margin: 0 auto 40rem;
  }
`;

export default SectionCovid;
