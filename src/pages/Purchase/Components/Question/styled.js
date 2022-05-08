import styled from 'styled-components';
import { media } from 'styles/mediaQueries';

export const Layout = styled.section`
  padding: 0 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  ${media.mobileScreen} {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 20px;
    position: relative;
    max-width: 309px;
    margin: 0 auto;
    flex-direction: column;
    height: 100%;
    min-height: 454px;
    max-height: 575px;
  }
  .question {
    font-family: Gilroy-SemiBold;
    font-size: 14px;
    line-height: 22px;
  }
  .button {
    width: 242px;
  }
  .videoElm {
    width: 269px;
    border-radius: 23px;
    height: 100%;
    object-fit: cover;
  }
  .note {
    color: #999;
    font-family: Gilroy-Light;
    font-size: 16px;
    ${media.mobileScreen} {
      color: #fff;
      font-size: 14px;
      padding-top: 20px;
    }
  }
  .quesHead {
    padding-bottom: 27px;
  }
  .uploadLink {
    font-family: Gilroy;
    font-size: 14px;
    color: #2f829c;
    width: 100%;
    display: inline-block;
    text-align: center;
    padding-top: 20px;
    cursor: pointer;
    ${media.mobileScreen} {
      padding-bottom: 15px;
    }
  }
  .hidden {
    display: none;
  }
  .uploadBtn {
    width: 100%;
    display: inline-block;
    text-align: center;
    color: #2f839d;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    border-radius: 30px;
    margin-bottom: 15px;
    font-family: Gilroy-SemiBold;
    cursor: pointer;
  }
  .videoInputCapture {
    display: none;
  }
  .button-play {
    font-size: 44px;
    color: #ff6c58;
  }
  .disabled-btn {
    opacity: 0.3;
    pointer-events: none;
  }
  .questionWrapper:last-child {
    padding-bottom: 35px;
    @media screen and (min-width: 832px) and (max-height: 720px) {
      padding-bottom: 15px;
    }
  }
  .right-sec-wrap {
    order: 2;
  }
`;

export const VideoContainer = styled.section`
  width: 269px;
  height: 426px;
  border-radius: 23px;
  background-color: #e3e3e3;
  align-self: flex-start;
  position: relative;
  order: 1;
  ${media.mobileScreen} {
    max-height: 426px;
    height: calc(100% - 150px);
    min-height: 305px;
  }
  ${media.webView} {
    height: 426px;
  }
  @media screen and (min-width: 832px) and (max-height: 720px) {
    height: 386px;
  }
  .playButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .retry {
    background: #fff;
    width: 224px;
    color: #2f839d;
    position: absolute;
    transform: translateX(-50%);
    bottom: 20px;
    left: 50%;
  }
  .uploadCustom {
    bottom: 0;
  }
`;

export const QuestionContainer = styled.section`
  padding-left: ${props => (props.error ? '20px' : '40px')};
  display: flex;
  align-items: center;
  flex-direction: column;
  order: 2;
  ${media.mobileScreen} {
    display: ${props => (props.isShow ? 'block' : 'none')};
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
    bottom: 0;
    border-radius: 23px;
    background: rgba(0, 0, 0, 0.47);
    width: 269px;
    order: 2;
    margin-top: -280px;
    z-index: 9;
    position: absolute;
    bottom: 150px;
    height: 259px;
    overflow: auto;
  }
  &:empty {
    display: none;
  }
  .quesHead {
    font-family: Gilroy;
    font-size: 18px;
    color: #46829a;
    ${media.mobileScreen} {
      display: none;
    }
  }
  .instruction-head-mob {
    color: #fff;
    padding-bottom: 15px;
    font-family: Gilroy-SemiBold;
    font-size: 18px;
    line-height: 22px;
    ${media.webView} {
      display: none;
    }
  }

  .button {
    height: 60px;
    padding: 0;
    ${media.mobileScreen} {
      display: none;
    }
  }
  .mobDisplay {
    display: none;
    ${media.webView} {
      display: block;
    }
  }
  .noSupportBtn {
    position: absolute;
    left: 0;
    top: 225px;
    ${media.webView} {
      position: static;
      margin-top: 40px;
    }
  }
`;

export const ShowHide = styled.span`
  display: block;
  position: relative;
  width: 224px;
  text-align: center;
  height: 30px;
  order: 2;
  line-height: 30px;
  border-radius: 20px;
  background: #fff;
  color: #2f839d;
  font-family: Gilroy-Bold;
  cursor: pointer;
  margin: -47px auto 15px;
  z-index: 9;
  ${media.webView} {
    display: none;
  }
  /* :after, */
  :before {
    position: absolute;
    top: ${props => (props.isShow ? '6px' : '12px')};
    left: 24px;
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 1px solid #2f839d;
    border-top: 1px solid #2f839d;
    transform: ${props => (props.isShow ? 'rotate(135deg)' : 'rotate(315deg)')};
    margin-right: 28px;
    /* margin-left: 28px; */
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
`;
export const WebButtons = styled.section`
  padding-top: 37px;
  @media screen and (min-width: 832px) and (max-height: 720px) {
    padding-top: 0;
  }
`;
export const MobButtons = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  order: 3;
  width: 269px;
  align-items: center;
  ${media.webView} {
    display: none;
  }
  ${media.mobileScreen} {
    padding-bottom: 15px;
    height: 125px;
  }
`;

export const TimeSpan = styled.span`
  align-items: center;
  flex-direction: column;
  font-family: Gilroy;
  color: #555555;
  padding-bottom: 15px;
  padding-top: 2px;
  display: none;
  padding-left: 40px;
  ${media.webView} {
    display: flex;
  }
  .text {
    font-size: 16px;
    line-height: 0.9;
    margin-bottom: 4px;
  }
  .time {
    font-size: 21px;
  }
`;
