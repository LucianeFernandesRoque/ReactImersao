import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarouselStyle, Wrapper, Left, Right } from './styles';
import ThumbCovid from '../ThumbCovid';

function CarouselCovid({ videos }) {
  //let moveRight = useState;
  const [move, setMove] = useState(0);

  function actionRight() {
    setMove(oldMove => oldMove - 1);
  }

  function actionLeft() {
    setMove(oldMove => oldMove + 1);
  }
  return (
    <CarouselStyle>
      <Left onClick={actionLeft} />
      <Wrapper move={move}>
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
