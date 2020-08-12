import React from 'react';
import BannerCovid from './components/BannerCovid';
import TagCovid from './components/TagCovid';
import ThumbCovid from './components/ThumbCovid';
import MarcoDev from './assets/img/MarcoBrunoDev.png';
import MarcoBruno from './assets/img/MarcoBruno.png';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import SectionCovid from './components/SectionCovid';
import CarouselCovid from './components/CarouselCovid';
import DescriptionCovid from './components/DescriptionCovid';

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

      <BannerCovid
        tag="Em busca de um emprego"
        title="React Feliz"
        DescriptionCovid="Fazendo projetos para adquirir 
        conhecimento e arranjar um trabalho com programação."
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

      <SectionCovid>
        <TagCovid>Aprendendo React</TagCovid>

        <DescriptionCovid>
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um
          leite divinis, qui tem lupuliz, matis, aguis e fermentis.
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
          gostis. Praesent malesuada urna nisi, quis volutpat erat hendrerit
          non. Nam vulputate dapibus. Leite de capivaris, leite de mula manquis
          sem cabeça.
        </DescriptionCovid>

        <TagCovid small>#ImersaoReact</TagCovid>
        <CarouselCovid videos={videos} />
      </SectionCovid>

      <FooterOpen />
    </>
  );
}

export default App;
