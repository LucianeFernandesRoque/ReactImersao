import React from 'react';
import { BannerCovid, Text } from './components/BannerCovid';
import TagCovid from './components/TagCovid';
import TitleCovid from './components/TitleCovid';
import DescriptionCovid from './components/DescriptionCovid';
import ThumbCovid from './components/ThumbCovid';
import MarcoDev from './assets/img/MarcoBrunoDev.png';
import MarcoBruno from './assets/img/MarcoBruno.png';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import SectionCovid from './components/SectionCovid';
import CarouselCovid from './components/CarouselCovid';

const videos = [
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },

  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
  {
    src: MarcoDev,
    alt: 'Thumb MarcoBrunoDev',
    title: 'Curso React Feliz',
    avatar: MarcoBruno,
    channelName: 'marcobrunodev',
    timer: '03:19:03',
    Link: 'https: "//twich.tv/',
  },
];

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerCovid>
        <Text>
          <TagCovid>Codando Feliz</TagCovid>
          <TitleCovid>Marco Bruno - Aprendizado Feliz</TitleCovid>
          <DescriptionCovid>
            Aprendendo Feliz á codar com o MarcoBruno.
          </DescriptionCovid>
        </Text>

        <ThumbCovid
          src={MarcoDev}
          alt="Thumb MarcoBrunoDev"
          title="Curso React Feliz"
          avatar={MarcoBruno}
          channelName="marcobrunodev"
          timer="03:19:03"
        />
      </BannerCovid>
      <SectionCovid>
        <TagCovid>#ImersaoReact</TagCovid>
        <DescriptionCovid>
          #SuperDev é um projeto para aprender react.
        </DescriptionCovid>
        <TagCovid small>Marco Bruno - DevFeliz</TagCovid>
        <CarouselCovid videos={videos} />
      </SectionCovid>
      <FooterOpen />
    </>
  );
}

export default App;
