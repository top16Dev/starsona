import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FooterStyled } from './styled';

export const Footer = props => (
  <FooterStyled>
    <FooterStyled.Column>
      <FooterStyled.shareIconWrapper>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/getstarsona/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/getstarsona">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/getstarsona/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCmmN9QPqAGE18yWENxsw7jQ">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </FooterStyled.shareIconWrapper>
      <FooterStyled.list>
        <FooterStyled.listItem>
          <FooterStyled.Anchor target="_blank" rel="noopener noreferrer" href="https://about.starsona.com/faq/">
            Questions<br />& Answers
          </FooterStyled.Anchor>
        </FooterStyled.listItem>
        <FooterStyled.listItem>
          <FooterStyled.Anchor target="_blank" rel="noopener noreferrer" href="https://about.starsona.com/contact/">
            Contact<br />Starsona
          </FooterStyled.Anchor>
        </FooterStyled.listItem>
        <FooterStyled.listItem>
          <FooterStyled.Anchor target="_blank" rel="noopener noreferrer" href="https://about.starsona.com/privacy-policy/">
            Privacy<br />Policy
          </FooterStyled.Anchor>
        </FooterStyled.listItem>
        <FooterStyled.listItem>
          <FooterStyled.Anchor target="_blank" rel="noopener noreferrer" href="https://about.starsona.com/terms-service/">
            Terms of<br />Service
          </FooterStyled.Anchor>
        </FooterStyled.listItem>
      </FooterStyled.list>
    </FooterStyled.Column>
    <FooterStyled.StoreIconWrapper>
      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.starsona.app">
        <FooterStyled.StoreIcon alt="playsore icon" src="assets/images/playstore-download.svg" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/starsona/id1294478616?ls=1&mt=8">
        <FooterStyled.StoreIcon alt="playsore icon" src="assets/images/appstore-download.svg" />
      </a>
    </FooterStyled.StoreIconWrapper>
  </FooterStyled>
);
