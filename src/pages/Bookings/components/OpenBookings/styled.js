import styled from 'styled-components';
import { Card } from 'styles/CommonStyled';
import { media } from 'styles/mediaQueries';

const OpenStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 832px) {
    flex-direction: row;
    min-height: calc(100vh - 275px);
  }
  @media (min-width: 832px) and (max-width: 1279px) {
    min-height: 100%;
  }
  .video-loader {
    position: absolute;
  }
  .overlay-custom {
    display: none;
  }
  ${props =>
    props.clicked &&
    `@media (min-width: 832px) and (max-width: 1279px) {
        .overlay-custom {
            display: block;
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            left: 0;
            background: #010101;
            z-index: 101;
            opacity: .5;
        }
      }       
  `}
`;

OpenStyled.BookingList = styled.div`
  height: 100vh;
  @media (min-width: 1280px) {
    height: 100%;
    max-height: 700px;
  }
  @media (min-width: 832px) and (max-width: 1279px) {
    height: calc(100% - 100px);
  }
`;

OpenStyled.LeftSection = styled.div`
  @media (min-width: 1280px) {
    max-width: 273.6px;
    ${props => props.fullWidth && `max-width:100%; width: 100%;`};
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 832px) and (max-width: 1279px) {
    width: 100%;
  }
`;

OpenStyled.RightSection = Card.extend`
  flex: 1;
  padding-top: 40.8px;
  @media (min-width: 831px) {
    padding-top: 34px;
  }
  @media (max-width: 1279px) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    ${props => props.clicked && `display: block;`}
    overflow: scroll;
  }
  @media (min-width: 832px) and (max-width: 1279px) {
    width: 700px;
    height: 700px;
    position: fixed;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  ${media.largeScreen} {
    display: block;
    width: 700px;
    margin-left: 24.7px;
    min-height: 700px;
  }
  .arrow-btn {
    top: 36px !important;
    display: none;
    @media (max-width: 1279px) {
      display: block;
    }
  }
  .close-btn {
    display: none;
    @media (max-width: 1279px) {
      display: block;
    }
  }
`;

export default OpenStyled;
