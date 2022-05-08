import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: white;
  display: flex;
  padding: 0px 0px;
  flex-direction: column;
  height: 100%;
  padding-bottom: 56px;
  @media(min-width: 832px){
    flex-direction: row;
    padding-bottom: 0;
  }
`;
LoginContainer.wrapper = styled.div`
  height:100%;
  @media(min-width:832px){
    height: 100vh;
    overflow:auto;
    background-color:white;
  }
  
`;
LoginContainer.CloseButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  display: inline-block;
  width: 28px;
  height: 28px;
  cursor:pointer;
  color: #707070;
  font-size: 30px;
`;


LoginContainer.actionText = styled.span`
  cursor: pointer;
`;

LoginContainer.LeftSection = styled.div`
  width: 100%;
  height: 100%;
  @media(min-width: 832px){
    width: 45%;
    padding: 0px 0px;
    position: relative;
    padding-bottom: 83px;
  }
`;
LoginContainer.RightSection = styled.div`
  width: 100%;
  display: none;
  background: url( 'assets/images/1297371108618082396.jpg' ) no-repeat ;
  background-position: center; 
  background-size:cover;
  @media(min-width: 832px){
    width: 55%;
    display: block;
    padding: 0px 0px;
    position: relative;
  }
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

LoginContainer.SocialMediaSignup = styled.div`
  text-align:center;
  height: 100%;
  @media(min-width: 832px) {
    height: 100%;    
    padding: 5px 37px;
  }
`;
LoginContainer.Container = styled.div`
  @media(min-width: 832px) {
    padding: 14px 20px 0;
  }
  @media(max-width: 831px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;
LoginContainer.Heading = styled.div`
  font-family: 'Gilroy';
  font-size: 24px;
  text-align: center;
  color: #ff6c58;
  padding-top: 47px;
  padding-bottom: 20px;
  &.email-heading {
    padding-top: 41px;
    padding-bottom: 0px;
  }
  @media(max-width: 831px) {
    padding-top: 30px;
    padding-bottom: 40px;
    max-width: 178px;
    margin: 0 auto;
    &.email-heading {
      max-width: 150px;
      padding-top: 35px;
      padding-bottom: 38px;
    }
  }
`;
LoginContainer.Icon = styled.div`
  color: #2f839d;
  font-size: 59px;
  &.insta {
    font-size: 58px;
  }
  &.google {
    font-size: 57px;
  }
`;

LoginContainer.SocialMediaIcon = styled.div`
  display: block;
`;

LoginContainer.SocialMediaLabel = styled.div`
  font-family: Gilroy-Light;
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: #2f839d;
`;
LoginContainer.SocialMediaMessage = styled.div`
  font-family: 'Avenir-Medium';
  font-size: 14px;
  text-align: center;
  color: #333333;
  margin-top: 0;
`;
LoginContainer.ButtonIcon = styled.img`
  
  width: 23px;
  height: 23px;
  
`;
LoginContainer.ButtonDiv = styled.div`
    width:100%;
    @media(max-width:831px){
      max-width: 230px;
      margin: 0 auto;
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
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #2f839d;
  }
  @media(max-width:831px){
    padding: 20px 17px 5px;
  }
`;

LoginContainer.SocialIcon = styled.span`
  position:relative;
  padding-left: 32px;
  width:100%;
  height: 10px;
  display:block;
  &:before {
    content:'';
    position:absolute;
    left:0px;
    right:0;
    top:-6px;
    bottom:0;
    padding: 10px;  
    height: 10px;
  }
`;

LoginContainer.FacebookContent = LoginContainer.SocialIcon.extend`
  &:before {
    background: url( 'assets/images/facebook.svg' ) no-repeat left;
  }
  
`;
LoginContainer.GoogleContent = LoginContainer.SocialIcon.extend`
  &:before {
    background: url( 'assets/images/search.svg' ) no-repeat left;    
  }
  
`;
LoginContainer.InstagramContent = LoginContainer.SocialIcon.extend`
  &:before {
    background: url( 'assets/images/instagram.svg' ) no-repeat left;
  }
`;

LoginContainer.TwitterContent = LoginContainer.SocialIcon.extend`
  &:before {
    background: url( 'assets/images/twitter.png' ) no-repeat left;
    background-size: contain;
  }
`;

LoginContainer.InputFieldsWrapper = styled.form`
  
`;
LoginContainer.Label = styled.div`
  display:none;
  color:#333333;
  font-family: 'Avenir-Bold';
  font-size:16px;
  text-align:left;
  padding-bottom:10px;
  @media(min-width:832px){
    font-size:13px;
    width:69%;
  }

`;
LoginContainer.SectionHeading = styled.div`
  font-family: 'Avenir-Medium';
  font-size: 14px;
  text-align: center;
  color: #737373;
  margin-top:2%;
  @media(min-width:832px){
    font-size:14px;
  }
`;
LoginContainer.Input = styled.input`
  font-family: 'Avenir-Regular';
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
    height:33px;
    font-size:13px;
  }
`;
LoginContainer.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 832px) {
    margin-top: 34px;
    &.password-wrap {
      margin-top: 44px;
    }
  }
  .login-text {
    padding: 6px 0 11px;
  }
`;
LoginContainer.PrivacyContent = styled.div`
  text-align:left;
  font-family: 'Avenir-Regular';
  font-size:12px;
  padding: 17px 35px;
  color: #707070;
`;

LoginContainer.Footer = styled.div`
  position:fixed;
  bottom: 0;
  height:56px;
  background-color:#FFFFFF;
  z-index:1;
  display:flex;
  width:100%;
  padding:15px 6px;
  box-shadow: 0px 0px 12px 0px rgba(34, 34, 34, 0.4);
  @media(min-width:832px){
   position:relative;
   box-shadow:none;
   border-top: 1px solid #222;
   padding:26px 0px; 
  }
`;
LoginContainer.Footerleft = styled.div`
  width:60%;
  text-align:left;
`;
LoginContainer.ForgotButton = styled.button`
  color:rgba(51, 51, 51, 1);
  font-size:14px;
  font-family: 'Avenir-Medium';
  outline:none;
  border:none;
  background-color:white;
  
`;
LoginContainer.FooterRight = styled.div`
  width:40%;
  text-align:right;
`;
LoginContainer.SignIn = styled.input`
background-color:#fff ; 
color: #2f839d;
padding: 12px 30px;
margin-top: 42.5px;
width:100%;
text-align: center;
text-decoration: none;
display: inline-block;
font-size:18px;
font-family: 'Gilroy-Bold';
outline:none;
cursor: pointer;
border-radius:30px;
border: 2px solid #2f839d;
-webkit-appearance: none;

&:hover {
  background-color: #2f839d;
  border: 2px solid #fff;
  color:#fff;
}
@media(min-width:1920px){
  font-size:20px;
}
`;
LoginContainer.ForgotButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;
LoginContainer.ForgotButtonSpan = styled.span`
  color: #007FAA;
  font-family:  'Gilroy';
  font-size:14px;
`;
LoginContainer.ButtonWrapper = styled.div`
  margin-top: 45px;
  position: relative;
  @media(max-width: 831px){
    margin-top: 35px;
  }
  .error-msg {
    position: absolute;
    width: 100%;
    text-align: left;
    bottom: 100%;
    padding-bottom: 10px;
  }
`;
LoginContainer.CoverImage = styled.div`
  
`;
LoginContainer.FooterSection = styled.div`
  padding: 0px 0px;
  @media(min-width:832px){
    padding:0px 56px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }
`;
LoginContainer.ImageStackLayout = styled.div`
  padding: 32px 0;
  width:100%;
  height:100%;

`;
LoginContainer.ErrorDiv = styled.div`
  width:100%
`;
LoginContainer.ErrorMsg = styled.div`
  color:red;
  font-size: 11px;
  margin-top:4px;
  font-family: 'Avenir-light';
  text-align:left;
  
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
  @media(min-width:832px){
    width:160px;
    height:60px;
  }
`;
HeaderSection.HeaderNavigation = styled.button`
  background-image: url( 'assets/images/icon_back_40a.svg' );
  background-repeat: no-repeat;
  background-position: center;
  border:none;
  padding:20px;
  background-size: 26px;
  background-color:white;
  cursor: pointer;
  outline:none;
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
  @media(min-width:1920px){
    font-size:22px;
  }
`;
LoginContainer.WrapsInput = styled.div`
  width:100%;
  height:60px;
  input {
    font-family: Gilroy;
    font-size: 18px;
    line-height: 1.14;
    text-align: center;
    color: #615195;
    text-align: center;
  }
  input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; } /* Firefox 18- */
input:focus::-moz-placeholder { color:transparent; } /* Firefox 19+ */
input:focus:-ms-input-placeholder { color:transparent; } /* oldIE ;) */
  @media(min-width:832px){
    height:32px;
  }

`;
LoginContainer.GoogleWrapper = styled.div`
  display:none;
  
`;
LoginContainer.EmptyDiv = styled.div`
  display:none;
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
  @media(min-width:832px){
    top:5px;
    padding: 12px;
  }
`;
LoginContainer.PasswordWrapper = styled.div`
  position:relative;
 
`;
LoginContainer.InputContainer = styled.div`
  
  vertical-align: middle;
  height: 100%;
  
  @media(min-width:832px){
    display: inline-block;
    width:75%;
    margin: 20px 20px;
    margin-top: 0;
  }
`;
LoginContainer.SignupLine = styled.div`
 
    display: block;
    font-family: 'Avenir-Light';
    color:#b3acac;
    font-size: 12px;
    margin: 0;
    margin: 20px 20px;
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


export { LoginContainer, HeaderSection };
