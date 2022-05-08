import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: white;
  display: flex;
  padding: 0px 0px;
  flex-direction: column;
  height: 100%;
  padding-bottom: 56px;
  @media(min-width: 1025px){
    flex-direction: row;
    padding-bottom: 0;
  }
`;

LoginContainer.wrapper = styled.div`
  height:100%;
  @media(min-width:1025px){
    height: 100vh;
    overflow:auto;
    background-color:white;
  }
  
`;
LoginContainer.LeftSection = styled.div`
  width: 100%;
  height: 100%;
 

  @media(min-width: 1025px){
    width: 45%;
    padding: 0px 0px;
    position: relative;
    padding-bottom: 83px;
  }
`;
LoginContainer.Anchor = styled.a`
  &:visited{
    color:#333333;
  }
  color: #333333;
`;
LoginContainer.RightSection = styled.div`
  width: 100%;
  display: none;
  background: url( 'assets/images/1297371108618082396.jpg' ) no-repeat ;
  background-position: center; 
  background-size:cover;
  @media(min-width: 1025px){
    width: 55%;
    display: block;
    padding: 0px 0px;
    position: relative;
  }
`;

LoginContainer.FirstLastNameWrapper = styled.div`
  display:flex;
  flex-direction: column;
  @media(min-width:768px){
    flex-direction:row;
    justify-content:space-between;
  }
`;
LoginContainer.FirstNameWrapper = styled.div`
  width:100%;
  @media(min-width:768px){
    width: ${props => (props.groupSignup ? '100%' : '49%')};
  }
`;
LoginContainer.LastNameWrapper = styled.div`
  width:100%;
  @media(min-width:768px){
    width:49%
  }
`;
LoginContainer.SocialMediaSignup = styled.div`
  text-align:center;
  height: 100%;
  @media(min-width:768px){
    padding: 5px 0;
    padding-bottom: 0;  
  }
`;
LoginContainer.Container = styled.div`
  display: block;
`;
LoginContainer.Heading = styled.div`
  font-family: Gilroy;
  color: #ff6c58;
  font-size: 24px;
  @media(min-width:832px){
    padding-top: 19px;
  }
  @media(max-width:831px){
    font-size: 24px;
    margin: 31px auto 11px;
    line-height: 28px
  }
  
`;

LoginContainer.ButtonIcon = styled.img`  
  width: 23px;
  height: 23px;
`;
LoginContainer.ButtonDiv = styled.div`
    width:100%;
`;
LoginContainer.SocialMediaMessage = styled.div`
  font-family: 'Avenir-Regular';
  font-size: 14px;
  text-align: center;
  color: #7B797A;
  @media(min-width:832px){
    font-size: 18px;
  }
`;
LoginContainer.Button = styled.button`
  font-size:100%;
  font-family:inherit;
  border:0;
  padding:20px;
  outline:none;
  background-color:white;
  cursor:pointer;
`;

LoginContainer.SocialIcon = styled.span`
  position:relative;
  width: 30px;
  height: 30px;
  display:block;
`;

LoginContainer.FacebookContent = LoginContainer.SocialIcon.extend`
  background: url( 'assets/images/facebook.svg' ) no-repeat left; 
`;
LoginContainer.GoogleContent = LoginContainer.SocialIcon.extend`
  background: url( 'assets/images/search.svg' ) no-repeat left;
`;
LoginContainer.InstagramContent = LoginContainer.SocialIcon.extend`
  background: url( 'assets/images/instagram.svg' ) no-repeat left;
`;
LoginContainer.TwitterContent = LoginContainer.SocialIcon.extend`
  background: url( 'assets/images/twitter.png' ) no-repeat left;
  background-size: contain;
`;
LoginContainer.Line = styled.hr`
  width:230px;
  margin-top:7%;
  background-color:#CCCCCC;
  @media(min-width:768px){
   display:none;
  }
`;
LoginContainer.InputFieldsWrapper = styled.form`
  
  @media(min-width:832px){
    padding: 0px 0px;
  }
`;
LoginContainer.ErrorDiv = styled.div`
  height:10px;
  
`;
LoginContainer.ErrorMsg = styled.div`
  color:red;
  font-size: 11px;
  margin-top:4px;
  font-family: 'Avenir-light';
  text-align:left;
  @media(min-width:832px){
    

  }
`;
LoginContainer.Label = styled.div`
  font-family: Gilroy-Medium;
  font-size: 14px;
  line-height: 2.08;
  text-align: center;
  color: ${props => (props.error ? '#990000' : '#555555')}; 
  padding-top: 25px;
  width:100%;
  @media(min-width:832px){
    font-size:12px;
    padding-top: 47px;
    line-height: 30px;
    align-items:center;
    padding-bottom:0px;
    padding-top: 44px;
    &.optional-text {
      padding-top: 43px;
    }
  }
  @media(max-width:831px){
    margin-bottom: 0;
    padding-top: 5px;
    margin-top: 10px;
    line-height: 24px;
    padding-bottom: 10px;
    &.optional-text {
      margin-top: 18px;
      margin-bottom: -2px;
    }
  }

`;
LoginContainer.SectionHeading = styled.div`
  font-family: 'Avenir-Medium';
  font-size: 14px;
  text-align: center;
  color: #737373;
  margin-top:2%;
  @media(min-width:832px){
    font-size: 18px;
  }
`;
LoginContainer.Input = styled.input`
  color: #333333;
  font-size:16px;
  text-align:left;
  outline:none;
  border: 1px solid #EBEBEB;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  text-indent: 10px;
  margin-top:3%;
  background-color: #fff;
  &:focus {
    border-color: #FF6C58;
  }
  @media(min-width:832px){
    margin-top:0;
    height:40px;
  }
`;
LoginContainer.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:4px;
  @media(min-width:832px){
    flex-direction: row;
    margin-top:4px;
  }
`;
LoginContainer.PrivacyContent = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  color: #555555;
  display: flex;
  text-align: left;
  max-width: 300px;
  position: relative;
  margin: 10px auto;
  @media(min-width: 832px) {
    margin: 33px auto 0;
    max-width: 341px;
  }

  ${LoginContainer.Anchor} {
    color: #2f839d;
    cursor: pointer;
    text-decoration: none;
    padding-left: 5px;
  }
  .check-wrap {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
  }
  .checkmark {
    top: 4px;
  }
`;

LoginContainer.ImageStackLayout = styled.div`
  padding:32px 0;
  width:100%;
  height:100%;

`;
LoginContainer.FooterLayout = styled.div`
  padding: 0;
  @media(min-width:1025px){
    padding: 0px 57px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }
  
`;
const HeaderSection = styled.div`
  padding: 3px 15px;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

HeaderSection.LogoImage = styled.img`
  width:100px;
  height:45px;
  @media(min-width:1025px){
    width:160px;
    height:60px;
  }
`;
HeaderSection.MiddleDiv = styled.div`
  font-family: 'Avenir-Bold';
  font-size : 13px;
  @media(min-width:1920px){
    font-size:16px;
  }
`;
HeaderSection.RightDiv = styled.button`
  background-color: #fff; 
  margin-right: 5px;
  color: #333333;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Avenir-Medium';
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  outline:none;
  border: none;
  @media(min-width:832px){
    font-size:20px
  }
`;

const FooterSection = styled.div`
  position:fixed;
  bottom: 0;
  background-color:#FFFFFF;
  z-index:1;
  width:100%;
  display:flex;
  padding:13px 12px;
  box-shadow: 0px 0px 12px 0px rgba(34, 34, 34, 0.4);
  @media(min-width:1025px){
   box-shadow:none;
   position: relative;
   padding: 26px 0px;
   border-top: 1px solid #222;
  }
  
`;
FooterSection.LeftSection = styled.div`
  display:none;
  text-align:left;
  @media(min-width:768px){
    display:block;
    width:50%;
  }
`;
FooterSection.Agreement = styled.div`
  text-align:left;
  color:rgba(112, 112, 112, 1);
  font-family: 'Avenir-Regular';
  font-size:12px;
`;
FooterSection.RightSection = styled.div`
  width:100%;
  text-align:right; 
  @media(min-width:768px){
    width:50%;
  }
`;
FooterSection.Button = styled.input`
  background-color:#FF6C58 ; 
  color: #fff;
  padding: 12px 30px;
  width:100%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size:14px;
  font-family: 'Avenir-Bold';
  outline:none;
  cursor: pointer;
  border-radius:5px;
  border: 2px solid #FF6C58;
  -webkit-appearance: none;
  &:hover {
    background-color: #FF3B21;
  }
  @media(min-width:1920px){
    font-size:20px;
  }
`;
LoginContainer.WrapsInput = styled.div`
  width:100%;
  > div {
    width: 100%;
    @media(max-width: 832px) {
      &:first-child {
        margin-bottom: 15px;
        &.no-space {
          margin-bottom: 0;
        }
      }
    }
  }
  input {
    font-family: Gilroy-Medium;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: #615195;
    text-align: center;
    padding: 6px 0 5px;

    &::-webkit-input-placeholder { font-size: 18px;}
    &:-moz-placeholder { font-size: 18px;}
    &::-moz-placeholder {  font-size: 18px;}
    &:-ms-input-placeholder { font-size: 18px;}

    &.input-label-email {
      &::-webkit-input-placeholder { 
        @media (max-width: 831px) {
          font-size: 16px;
        }
        @media (max-width: 370px) {
          font-size: 14px;
        }
      }
      &:-moz-placeholder { 
        @media (max-width: 831px) {
          font-size: 16px;
        }
        @media (max-width: 370px) {
          font-size: 14px;
        }
      }
      &::-moz-placeholder {
        @media (max-width: 831px) {
          font-size: 16px;
        }
        @media (max-width: 370px) {
          font-size: 14px;
        }
      }
      &:-ms-input-placeholder { 
        @media (max-width: 831px) {
          font-size: 16px;
        }
        @media (max-width: 370px) {
          font-size: 14px;
        }
      }
    }
  }
    // &.input-label-first-name {
    //   &::-webkit-input-placeholder { font-size: 18px;}
    //   &:-moz-placeholder { font-size: 18px;}
    //   &::-moz-placeholder {  font-size: 18px;}
    //   &:-ms-input-placeholder { font-size: 18px;}
    // }
    // &.input-label-last-name {
    //   &::-webkit-input-placeholder { font-size: 18px;}
    //   &:-moz-placeholder { font-size: 18px;}
    //   &::-moz-placeholder {  font-size: 18px;}
    //   &:-ms-input-placeholder { font-size: 18px;}
    // }
    // &.input-label-stage-name {
    //   &::-webkit-input-placeholder { font-size: 17px;}
    //   &:-moz-placeholder { font-size: 17px;}
    //   &::-moz-placeholder {  font-size: 17px;}
    //   &:-ms-input-placeholder { font-size: 17px;}
    // }
  input::-webkit-input-placeholder { color:#aaaaaa; opacity: 1; }
  input:-moz-placeholder { color:#aaaaaa; opacity: 1; } /* Firefox 18- */
  input::-moz-placeholder { color:#aaaaaa; opacity: 1; } /* Firefox 19+ */
  input:-ms-input-placeholder { color:#aaaaaa; opacity: 1; } /* oldIE ;) */
  
  input:focus::-webkit-input-placeholder { color:transparent; }
  input:focus:-moz-placeholder { color:transparent; } /* Firefox 18- */
  input:focus::-moz-placeholder { color:transparent; } /* Firefox 19+ */
  input:focus:-ms-input-placeholder { color:transparent; } /* oldIE ;) */
  @media(min-width:768px){
    width:100%;

    &:first-child {
      padding-right: 10px;
    }
    &:last-child {
      padding-left: 10px;
    }
    &:only-child {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media(min-width:1025){
    width:352px;
    font-size: 22px;
    padding-bottom: 3px;
  }
  .error-field {
    &:after {
      border-bottom-color: #980100 !important;
    }
  }

`;
LoginContainer.GoogleWrapper = styled.div`
  display:none;
  
`;
LoginContainer.EmptyDiv = styled.div`
  display:none;
`;
LoginContainer.LoginDiv = styled.button`
  background-color: #fff; 
  margin-right: 5px;
  color: #FF6C58;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Avenir-Light';
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  outline:none;
  border: none;
  @media(min-width:1920px){
    font-size:16px;
  }
`;
LoginContainer.ShowPassword = styled.span`
  position:absolute;
  background-image: url( 'assets/images/icon_1pass_24a.svg' );
  background-repeat: no-repeat;
  background-position: center;
  background-size:19px;
  padding: 14px;
  right: 7px;
  bottom: 6px;
  cursor:pointer;
  @media(min-width:1025px){
    padding: 12px;
  }
`;
LoginContainer.PasswordWrapper = styled.div`
  position:relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;
LoginContainer.InputContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  
  @media(min-width:832px){
    width:90%;
    margin: 0 20px;
    max-width: 400px;
  }
`;
LoginContainer.ButtonWrapper = styled.div`
  margin-top: 17px;
  margin-bottom: 20px;
  @media(min-width:832px){
    margin-top: 22px;
  }

  .fan-form &.align-center {
    margin-top: 40px;
  }
`;
LoginContainer.SignupLine = styled.div`
  display: block;
  font-family: 'Gilroy-Light';
  color:#b3acac;
  font-size: 12px;
  margin: 0;
  margin: 20px 20px;
  margin-top: 0;
  order: 1;
  span {
    display: inline-block;
  }
  &::before, &::after {
    content: '';
    display: inline-block;
    height: 1px;
    background-color: #e8e7e7;
    vertical-align: middle;
    width: 50px;
    width: calc(50% - 69px);
  }
  &::before {
    margin-right: 10px;
  }
  &::after {
    margin-left: 10px;
  }  
`;

export { LoginContainer, HeaderSection, FooterSection };
