import React from 'react';
import AvatarCovid from '../components/AvatarCovid';
import MarcoBruno from './assets/MarcoBruno.png';

export default {
  title: 'AvatarCovid',
  component: AvatarCovid,
};

export const Default = () => (
  <AvatarCovid photo={MarcoBruno} channelName="marcobrunodev" />
);

Default.story = {
  name: 'to Storybook',
};
