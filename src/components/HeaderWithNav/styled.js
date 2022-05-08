import styled from 'styled-components';

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0px 4px 8px 0px #cccccc;
  height: 138px;
  z-index: 10;

  @media (max-width: 736px) {
    height: 60px;
  }
`;

HeaderSection.HeaderDiv = styled.div`
  display:flex;
  padding: 3px 16px;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  height: 100%;  
  flex-wrap: wrap;
  @media (min-width:768px){
    padding: 10px 44px;
  }
  @media (min-width: 1025px) {
    padding: 10px 50px 20px;
  }
`;
HeaderSection.HeaderRight = styled.div`
  display: inline-block;
`;
HeaderSection.HeaderLeft = styled.div`
  display: inline-block;
  @media(min-width: 1025px) {
    width: 25%;
    max-width: 310px;
  }
`;
HeaderSection.ImgLogo = styled.img`
  width:  117.61px;
  height: 19.27px;
  margin-top: 6px;
  @media(min-width: 1920px) {
    width: auto;
    height: 26px;
  }
`;
HeaderSection.MenuButton = styled.button`
  background-image: ${props => (props.menuActive ? "url( 'assets/images/icon_menu_-1.png' )" : "url( 'assets/images/icon_menu_16a.png' )")};
  background-repeat:no-repeat;
  padding: 11px;
  margin-left:10px;
  vertical-align: top;
  margin-top: 10px;
  outline: none;
  border:none;
  background-color:white;
  @media(min-width : 1025px){
    display:none;
  }
`;
HeaderSection.SearchButton = styled.button` 
  display: ${props => (props.hide ? 'none' : 'inline-block')};
  background-image: url( 'assets/images/icon_search_40a.png' );
  background-repeat: no-repeat;
  background-position: center;
  border:none;
  outline: none;
  padding:20px;
  background-size: 40px;
  background-color:white;
  @media(min-width : 768px){
    display:none;
  }
`;
HeaderSection.ClearButton = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 12px;
  background-image: url( 'assets/images/close-icon.svg' );
  background-repeat: no-repeat;
  background-position: center;
`;
HeaderSection.SignInButtonMobile = styled.button`
  background-image: url( 'assets/images/icon_profile_40a.png' );
  background-repeat:no-repeat;
  background-position: center;
  border:none;
  outline: none;
  padding:18px;
  background-size: 35px;
  background-color:white;
  @media(min-width:767px){
   display: none;
  }
`;
HeaderSection.ProfileButton = styled.button`
  display: ${props => (props.hide ? 'none' : 'inline-block')};
  background-image: ${props => (props.profileUrl ? `url(${props.profileUrl})` : 'url(assets/images/icon_profile_40a.png)')};
  background-repeat:no-repeat;
  background-position: center;
  border:none;
  outline: none;
  padding:18px;
  border-radius: 50%;
  background-size: cover;
  background-color:white;
  cursor: pointer;
`;
HeaderSection.ProfileDropdown = styled.ul`
  position: absolute;
  right: 0;
  padding: 10px;
  top: 100%;
  width: 200px;
  background: #fff;
  border-radius: 13px;
  box-shadow: 0px 4px 8px 0px #cccccc;
`;
HeaderSection.ProfileDropdownItem = styled.li`
  font-size: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  color: #333333;
  cursor: pointer;
  text-decoration: none;
  a {
    width: 100%;
    display: block;
  }
  &:hover {
    color: #FF6C58;
  }
  &:last-child {
    border-bottom: none;
  }
`;
HeaderSection.LinkElement = styled.span`
  position: relative;
`;

HeaderSection.InnerListItemCount = styled.span`
  font-family: 'Avenir-Medium';
  font-size: 13px;
  line-height: 18px;
  margin-left: 5px;
  padding: 0 11px;
  text-align: center;
  border-radius: 16px;
  background-color: #FF6C58;
  color: #fff;
  display: inline-block;
`;
HeaderSection.UserProfileName = HeaderSection.ProfileDropdownItem.extend`
  font-family: 'Avenir-Bold';
  cursor: auto;
  border-bottom: none;
  &:hover {
    color: #333333;
  }
`;
HeaderSection.UserLink = HeaderSection.ProfileDropdownItem.extend`
  display: block;
  a {
    color: #333333;
  }
`;
HeaderSection.FavoriteButton = styled.button`
  display: none;
  @media(min-width: 768px) {
    display: inline;
    cursor: pointer;
    outline: none;
    background-image: url( 'assets/images/icon_favorite_40a.png' );
    background-repeat:no-repeat;
    background-position: center;
    border:none;
    padding:18px;
    background-size: 29px;
    background-color:white;
    margin-right: 16px;
  }
  
`;
HeaderSection.MyvideoButton = styled.button`
  display: none;
  @media(min-width: 768px) {
    display: inline;
    cursor: pointer;
    outline: none;
    background-image: url( 'assets/images/icon_myVids_40a.png' );
    background-repeat:no-repeat;
    background-position: center;
    border:none;
    padding:18px;
    background-size: 29px;
    background-color:white;
    margin-right: 16px;
  } 
`;
HeaderSection.SearchBar = styled.div`
  position:absolute;
  display: ${props => (props.hide ? 'none' : 'block')};
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  background: #fff;
  @media(min-width : 768px){
    position: relative;
    display: inline-block;
    display: flex;
    align-items: center;
  }
  @media(min-width: 1025px) {
    width: 50%;
    max-width: 640px;
  }
`;
HeaderSection.AutoSuggest = styled.div`
  height: 100%;
  @media(min-width: 1025px) {
    box-shadow: rgb(204, 204, 204) 0px 3px 7px 0px inset;
  }
`;
HeaderSection.SuggestionListWrapper = styled.div`
  font-family: Avenir-Light;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFFFF;
  box-shadow: rgb(204, 204, 204) 0px 3px 7px 0px inset;
  @media(min-width: 768px) {
    box-shadow: 0px 6px 6px 0px #cccccc;
    position: absolute;
    top: 50px;
    left: 0;
    right: initial;
    height: 300px;
    width: 400px;
    bottom: initial;
    box-shadow: none;
  }
  @media(min-width: 1025px) {
    width: auto;
    top: 47px;
    right: 0;
    height: 320px;
    box-shadow: 0px 6px 6px 0px #cccccc;
  }
`;
HeaderSection.SuggestionList = styled.ul`
  padding: 16px 10px;
`;
HeaderSection.noDataWrapper = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;
HeaderSection.noDataText = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 18px;
`;
HeaderSection.SuggestionListItem = styled.li`
  width: 100%;
  padding: 0 16px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 18px;
  line-height: 23px;
  &:hover, &:focus{
    background-color: #F8F8F8;
  }
  &:first-child{
    margin-top:0;
  }
  @media(min-width: 1025px) {
    padding: 0 30px;
  }
`;
HeaderSection.SuggestionListContent = styled.span`
  color: #333333;
  display: flex;
  width: 100%;
  align-items: center;
`;

HeaderSection.SuggestionDetails = styled.p`
  font-size: 12px;
  color:rgba(34, 34, 34, 0.7);
  font-family: 'Avenir-Light';
  line-height: 18px;
  @media(min-width: 768px) {
    font-size: 14px;
  }
`;

HeaderSection.SuggestionListImage = styled.span`
  width: 50px;
  height: 50px;
  background-image: ${props => (props.imageUrl ? `url(${props.imageUrl})` : 'url(assets/images/profile.png)')};
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover;
  border-radius: 50%;
`;
HeaderSection.SuggestionListName = styled.span`
  margin-left: 10px;
`;

HeaderSection.InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    background-image: url( 'assets/images/icon_search_40a.png' );
    background-repeat:no-repeat;
    background-position: center;
    left: 15px;
    top: 20%;
    width: 35px;
    height: 35px;
  }
  @media(min-width: 768px) {
    width: 319px;
    height: 32px;
    background-color: #F8F8F8;
    &::before {
      width: 20px;
      height: 23px;  
    }
  }
  @media(min-width: 1025px) {
    width: 100%;
  }
  @media(min-width: 1920px) {
    height: 48px;
  }
`;
HeaderSection.Input = styled.input`
  padding-left: 64px;
  width: calc(100% - 28px);
  outline:none;
  height: 100%;
  font-family: 'Avenir-Light';
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background: transparent;
  @media(min-width: 768px) {
    text-indent: 24px;
  } 
  @media(min-width : 1025px){
    text-indent: 0;
    text-align: center;
    font-size: 18px;
  }
  @media(min-width: 1920px) {
    font-size: 20px;
  }
`;
HeaderSection.SignIn = styled.button`
  background-color: #fff; 
  margin-right: 5px;
  color: black;
  padding: 6px 33px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  font-family: 'Avenir-Bold';
  display: inline-block;
  border: none;
  outline:none;
  cursor: pointer;
  @media(max-width:767px){
    display:none;
  }
  @media(min-width: 768px) {
    font-size: 16px;
    padding: 6px 10px;
    padding-bottom: 10px;
  }
  @media(min-width: 1920px) {
    font-size: 16px;
  }
`;
HeaderSection.Join = styled.button`
  background-color: #fff; 
  color: #FF6C58;
  padding: 6px 13px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  font-family: 'Avenir-Bold';
  outline:none;
  border-radius:5px;
  cursor: pointer;
  outline:none;
  border: 2px solid #FF6C58;
  @media(max-width:767px){
    display:none;
  }
  @media(min-width: 1920px) {
    font-size: 20px;
    width: 160px;
    height: 40px;
  }
`;
HeaderSection.SignInIcon = styled.img`
  display: none;
  width: 25px;
  height: 25px;
  position: relative;
  top: 7px;
  @media(min-width: 768px) {
    display: inline-block;
    margin-right: 13px;
  }
  @media(min-width: 1920px) {

  }
`;
HeaderSection.Navigation = styled.div`
  display: block;
  position: static;
  top: 56px;
  bottom: 0px;
  width: 100%;
  left: 0px;
  right: 0px;
  background: rgb(255, 255, 255);
  margin-top: 29px;

  @media (max-width: 736px) {
    position: fixed;
    margin: 0;
    z-index: 99;
    display: none;

    &.show-nav {
      display: block;
    }
  }
`;
HeaderSection.NavList = styled.ul`
  height: 100%;
  padding: 41px 0px 10px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0px;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0px auto;
  max-width: 1280px;

  @media (max-width: 736px) {
    display: block;
  }
`;
HeaderSection.NavListItem = styled.li`
  cursor: pointer;
  font-family: 'Avenir-Medium';
  font-size: 20px;
  line-height: 18px;
  margin-left: 36px;
  padding: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;

  @media (min-width: 1025px) {
    font-size: 18px;
    margin-left: 30px;
  }

  @media (max-width: 736px) {
    line-height: 46px;
    margin-left: 0;
    padding-left: 36px;
  }

  &.active {
    a {
      color: rgb(47, 131, 157);
    }

    @media (max-width: 736px) {
      border-left: 5px solid rgb(47, 131, 157);
    }
  }

  a {
    color: rgb(153, 153, 153);

    &:hover {
      color: rgb(47, 131, 157);
    }
  }
`;

HeaderSection.ResponsiveNavStack = styled.span`
  font-size: 20px;
  cursor: pointer;
  width: 20px;
  color: rgb(47, 131, 157);

  @media (min-width: 736px) {
    display: none;
  }
`;

export default HeaderSection;

