import styled from 'styled-components';

const LandingStyled = styled.div`
  margin-top: 0;
  @media(min-width: 832px) {
    margin-top: 0;
    height: auto;
  }
`;

LandingStyled.Container = styled.div`
  @media(min-width: 832px) {
    display: block;
  }
`;

LandingStyled.sectionWrapper = styled.div`
  max-width: 1920px;
  height:100%;
`;

LandingStyled.sideSection = styled.section`
  background-color: #fff;
  height: ${props => props.menuActive && '100%'};
  @media(min-width: 1025px) {
    width:25%;
    max-width: 310px;
    display: inline-block;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  @media(min-width: 1920px) {
    top: 72px;
    padding-top: 72px;
  }
`;

LandingStyled.mainSection = styled.section`
  height: 100%;
  display: ${props => (props.menuActive ? 'none' : 'table')};
  width: 100%;
  @media(min-width: 768px) {
    padding-top: 40px;
  }
  @media(min-width: 1025px) {
    width: 75%;
    display: table;
    vertical-align: top;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    float: right;
  }
  @media(min-width: 1920px) {
    padding-top: 72px;
  }
  @media(min-width: 1241px) {
    width: calc(100% - 310px);
  }
`;

LandingStyled.ScrollListWrapper = styled.div`
  display: table-row;
  height: 100%;
`;

LandingStyled.loaderWrapper = styled.div`
  height: calc(100% - 95px);
  padding: 20px 16px;
  @media(min-width: 1025px) {
    height: calc(100% - 79px);
    padding: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media(min-width: 1920px) {
    padding-top: 32px;
  }
`;

export default LandingStyled;
