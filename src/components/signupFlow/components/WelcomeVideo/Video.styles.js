import styled from 'styled-components';
import { media } from '../../../../styles/mediaQueries';

export const Layout = styled.section`
  height: 100%;
  max-width: 318px;
  padding-top: 0;
  ${media.webView} {
    max-width: 570px;
    padding-top: 0;
  }
  margin: 0 auto;
  @media (max-width: 831px) {
    padding-top: 0;
  }
  .mobileBtn {
    position: relative;
    display: flex;
    order: 3;
    margin-bottom: 5px;
    margin-top: 12px;
    ${media.webView} {
      display: none;
    }
    .button {
      padding: 20px 0;
    }
  }
  .note {
    font-family: Gilroy-Light;
    color: #fff;
    font-size: 14px;
    padding-top: 0;
    padding-bottom: 20px;
    ${media.webView} {
      color: #999;
      font-size: 16px;
      padding-top: 20px;
      padding-bottom: 0;
    }
  }
  .skip {
    display: none;
    width: 100%;
    text-align: center;
    padding-top: 5px;
    color: #615195;
    font-size: 14px;
    cursor: pointer;
    font-family: Gilroy;
    padding-bottom: 0;
    ${media.webView} {
      display: inline-block;
      padding-top: 15px;
      padding-bottom: 10px;
    }
  }
  .skipMob {
    display: block;
    position: relative;
    left: 0;
    padding-top: 5px;
    padding-bottom: 10px;
    order: 4;
    ${media.webView} {
      display: none;
    }
  }
  .videoInputCapture {
    display: none;
  }
`;

export const VideoContainer = styled.section`
  width: 288px;
  height: 454px;
  border-radius: 23px;
  background-color: #555555;
  position: relative;
  @media (max-width: 831px) {
    max-width: 317px;
    width: 100%;
    margin: 0 auto;
    max-height: calc(100% - 116px);
    height: 514px;
    order: 1;
  }
  .playButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .retry {
    background: #fff;
    width: 224px !important;
    color: #2f839d;
    position: absolute;
    left: 50%;
    bottom: 25px;
    transform: translateX(-50%);
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    padding: 0;
  }
  .videoElm {
    width: 100%;
    border-radius: 23px;
    height: 100%;
    object-fit: cover;
  }
`;

export const QuestionContainer = styled.section`
  padding-left: ${props => (props.error ? '20px' : '33px')};
  ${media.mobileScreen} {
    padding-left: ${props => (props.error ? '20px' : '26px')};
    display: ${props => (props.isShow ? 'block' : 'none')};
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.47);
    width: 100%;
    padding-top: 27px;
    margin-left: 0;
    padding-right: ${props => (props.error ? '20px' : '0')};
    order: 2;
    z-index: 5;
    padding-bottom: 59px;
    margin-top: -269px;
  }
  h1 {
    font-family: Gilroy;
    font-size: 18px;
    color: #46829a;
    display: none;
    ${media.webView} {
      display: block;
    }
  }
  .button {
    display: none;
    width: auto;
    ${media.webView} {
      display: block;
      margin-top: 25px;
      height: 60px;
      padding: 0;
    }
  }
  .heading {
    font-family: Gilroy-Medium;
    margin-bottom: 23px;
  }
  .tick {
    font-size: 19px;
  }
`;

export const ShowHide = styled.span`
  display: none;
  width: 224px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: #fff;
  color: #2f839d;
  font-family: Gilroy-Bold;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  order: 2; 
  z-index: 5;
  margin: -48px auto 18px;
  justify-content: center;
  position: relative; 
  ${media.webView} {
    display: none;
  }
  :after,
  :before {
    position: absolute;
    top: ${props => (props.isShow ? '6px' : '12px')};
    content: '';
    display: inline-block;
    width: 9px;
    height: 9px;
    border-right: 1px solid #2f839d;
    border-top: 1px solid #2f839d;
    transform: ${props => (props.isShow ? 'rotate(135deg)' : 'rotate(315deg)')};
  }
  :after {
    left: 28px;
  }
  :before {
    right: 28px;
  }
`;

export const PlayButton = styled.section`
  display: flex;
  justify-content: center;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: #fff;
  align-items: center;
  svg {
    font-size: 44px;
    color: #ff6c58;
    width: 49.9px;
    height: 49.9px;
  }
`;

export const TimeSpan = styled.span`
  align-items: center;
  flex-direction: column;
  font-family: Gilroy;
  color: #555555;
  padding-bottom: 38px;
  padding-top: 2px;
  display: none;
  ${media.webView} {
    display: flex;
  }
  .text {
    font-size: 16px;
    line-height: .9;
    margin-bottom: 4px;
  }
  .time {
    font-size: 21px;
  }
`;

export const FlexBox = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  ${media.webView} {
    justify-content: space-between;
  }
  ${media.mobileScreen} {
    flex-direction: column;
    padding: 0 20px;
    justify-content: flex-start;
  }
`;
