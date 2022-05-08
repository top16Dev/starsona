import styled from 'styled-components';

const CategoryPageStyled = styled.div`
  margin-top: 120px;
  height: calc(100vh - 120px);
  overflow: hidden;
  @media(min-width: 832px) and (max-width: 1280px) {
    margin-top: 235px;
    height: calc(100vh - 235px);
  }
  @media(min-width: 1280px) {
    margin-top: 260px;
    height: calc(100vh - 260px);
  }
  @media(min-width: 1280px) {
    margin-top: 151px;
    height: calc(100vh - 151px);
  }
`;

CategoryPageStyled.CategoryName = styled.span`
  font-family: Gilroy-Bold;
  font-size: 20px;
  line-height: 38px;
  color: ${props => props.theme.flatBlue};
  text-transform: uppercase;
`;

CategoryPageStyled.Filter = styled.span`
  font-family: Gilroy;
  font-size: 14px;
  text-align: center;
  &:after {
    content: ${props => `'${props.title}'`};
    margin-top: 5px;
    display: block;
  }
`;

CategoryPageStyled.AvatarWrapper = styled.div`
  z-index: 3;
  &.featured {
    display: none;
  }
  &.secondary {
    display: ${props => (props.disableMobile ? 'none' : 'block')};
  }
  @media(min-width: 832px) {
    &.featured {
      display: block;
      position: absolute;
      left: 33px;
      top: calc(100% - 310px);
      padding: 0 10px;
      background: ${props => props.theme.white};
    }
    &.secondary {
      display: ${props => (props.disableIpad ? 'none' : 'block')};
    }
  }
  @media(min-width: 1280px) {
    &.secondary {
      display: block;
      padding-right: 61px;
    }
  }
`;

CategoryPageStyled.FilterSection = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background: #fff;
  display: block;
  @media(min-width: 832px) {
    background: transparent;
    position: static;
    display: block;
  }
  @media(min-width: 1280px) {
    max-width: 1246px;
    margin: 0 auto;
  }
`;

CategoryPageStyled.StarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: none;
  @media(min-width: 832px) {
    display: block;
  }
`;

CategoryPageStyled.Heading = styled.span`
  display: block;
  margin-top: 24px;
  font-family: Gilroy-Medium;
  font-size: 26px;
  text-align: center;
  color: ${props => props.theme.twilight};
  min-height: 32px;
  @media(min-width: 832px) {
    font-size: 56px;
    min-height: 70px;
  }
  @media(min-width: 1280px) {
    margin-top: 37px;
  }
`;

CategoryPageStyled.FeaturedSection = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  border: ${props => `1px solid ${props.theme.brownGrey}`}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 23px;
  max-width: 375px;
  margin: 0 auto;
  margin-top: 24px;
  z-index: 1;
  &:after {
    content: ${props => `'${props.heading}'`};
    position: absolute;
    text-transform: uppercase;
    top: -7px;
    text-align: center;
    left: 50%;
    font-family: Gilroy-Bold;
    font-size: 14px;
    color: ${props => props.theme.orangePink};
    transform: translateX(-50%);
    background: #fff;
    padding: 0 20px;
  }
  @media(min-width: 832px) {
    max-width: 832px;
    margin-bottom: 137px;
    justify-content: flex-end;
    padding: 58px 42px;
    &:after {
      left: 198px;
      font-size: 23px;
      background: ${props => props.theme.white};
    }
  }
  @media(min-width: 1280px) {
    max-width: 1246px;
    padding-right: 0;
  }
`;

CategoryPageStyled.Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px;
  @media(min-width: 832px) {
    display: none;
  }
`;

CategoryPageStyled.Content = styled.div`
  height: calc(100% - 40px);
  padding: 12px 16px;
  overflow: auto;
  @media(min-width: 832px) {
    height: 100%;
    background: ${props => props.theme.white};
  }
`;

CategoryPageStyled.FeaturedWrapper = styled.div`

`;

CategoryPageStyled.ListingWrapper = styled.div`
  max-width: 1246px;
  height: 500px;
  margin: 0 auto;
`;

export default CategoryPageStyled;
