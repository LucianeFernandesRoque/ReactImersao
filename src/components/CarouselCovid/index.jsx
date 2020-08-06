import React from 'react';
import PropTypes from 'prop-types';
import ThumbCovid from '../ThumbCovid';
import { CarouselStyle, Right } from './styles';

function CarouselCovid({ videos }) {
  return (
    <CarouselStyle>
      {videos.map(({ src, alt, title, avatar, channelName, timer, link }) => (
        <ThumbCovid
          src={src}
          alt={alt}
          title={title}
          avatar={avatar}
          channelName={channelName}
          timer={timer}
          link={link}
        />
      ))}
      <Right />
    </CarouselStyle>
  );
}

const typeVideo = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  Link: PropTypes.string.isRequired,
};
CarouselCovid.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
};

export default CarouselCovid;
