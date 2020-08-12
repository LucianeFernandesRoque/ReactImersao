import React from 'react';
import PropTypes from 'prop-types';
import { BannerStyle, Text } from './styles';
import TagCovid from '../TagCovid';
import TitleCovid from '../TitleCovid';
import DescriptionCovid from '../DescriptionCovid';

function BannerCovid({ children, tag, title, description }) {
  return (
    <BannerStyle>
      <Text>
        <TagCovid>{tag}</TagCovid>
        <TitleCovid>{title}</TitleCovid>
        <DescriptionCovid>{description}</DescriptionCovid>
      </Text>
      {children}
    </BannerStyle>
  );
}

BannerCovid.propTypes = {
  children: PropTypes.element.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BannerCovid;
