import React from 'react';
import FooterStyle from './styles';
import LogoCovid from '../LogoCovid';
import LogoImersao from '../LogoImersao';
import HighlightCovid from '../HighlightCovid';

function FooterOpen() {
  return (
    <FooterStyle>
      <LogoCovid />

      <p>
        <HighlightCovid>by Luciane and</HighlightCovid>
      </p>

      <LogoImersao />
    </FooterStyle>
  );
}
export default FooterOpen;
