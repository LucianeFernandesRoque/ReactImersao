import React from 'react';
import { BannerCovid } from '../components/BannerCovid';
import ThumbCovid from '../components/ThumbCovid';

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
      src={MarcoDev}
      alt="Thumb MarcoBrunoDev"
      title="Curso React Feliz"
      avatar={MarcoBruno}
      channelName="marcobrunodev"
      timer="03:19:03"
    />
  </BannerCovid>
);
