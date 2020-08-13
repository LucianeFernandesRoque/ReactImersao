import React from 'react';
import BannerCovid from '../components/BannerCovid';
import ThumbCovid from '../components/ThumbCovid';
import MarcoBrunoDev from './assets/MarcoBrunoDev.png';
import MarcoBruno from './assets/MarcoBruno.png';

export default {
  title: 'BannerCovid',
  component: BannerCovid,
};

export const Default = () => (
  <BannerCovid
    tag="Codando Feliz"
    title="React Feliz"
    DescriptionCovid="Fazendo projetos para adquirir conhecimento e arranjar um trabalho com programação."
  >
    <ThumbCovid
      src={MarcoBruno}
      alt="Thumb MarcoBrunoDev"
      title="Curso React Feliz"
      avatar={MarcoBrunoDev}
      channelName="marcobrunodev"
      timer="03:19:03"
    />
  </BannerCovid>
);
