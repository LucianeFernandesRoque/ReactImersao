import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThumbCovid from '../ThumbCovid';
import { CarouselStyle, Right } from './styles';
import { Wrapper } from '../HeaderOpen/styles';

function CarouselCovid({ videos }) {
  //let moveRight = useState;
  const [moveRight, setmoveRight] = useState(false);

  function actionRight() {
    setmoveRight(true);
  }
  return (
    <CarouselStyle>
      <Wrapper moveRight={moveRight}>
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
      </Wrapper>
      <Right onClick={actionRight} />
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
