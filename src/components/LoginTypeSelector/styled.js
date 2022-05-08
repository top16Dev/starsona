import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const TypeSelectorWrapper = styled.div`
  text-align: center;
  height: calc(100% - 98px);
  @media(min-width: 1025px) {
    height: calc(100% - 55px);
  }
`;
TypeSelectorWrapper.Content = styled.div`
  padding: 0px 0px;
`;

TypeSelectorWrapper.heading = styled.div`
  font-family: 'Avenir-Bold';
  font-size: 25px;
  color:#FF6C58;
  @media(min-width:1920px){
    font-size:32px;
  }
`;
TypeSelectorWrapper.subheading = styled.div`
  font-family: 'Avenir-Light';
  font-size: 12px;
  color:#333333;
  @media(min-width : 768px){
    font-size: 16px;
  }
  @media(min-width: 1025px){
    font-size: 16px;
  }
  @media(min-width:1920px){
    font-size:16px;
  }
`;
TypeSelectorWrapper.LoginDiv = styled.button`
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
TypeSelectorWrapper.SocialMediaMessage = styled.div`
  font-family: 'Avenir-Regular';
  font-size: 14px;
  text-align: center;
  color: #7B797A;
  margin-bottom: 5px;
  word-spacing: 3px;
  @media(min-width:768px){
    font-size: 18px;
  }
  @media(min-width:1025px){
    font-size:14px;
  }
  @media(min-width:1920px){
    font-size:18px;
  }
`;
TypeSelectorWrapper.Button = styled.button`
  padding: 10px 10px;
  outline:none;
  border: 2px solid rgba(51, 51, 51, 1); 
  background-color: white;
  border-radius: 13px;
  margin-top: 6%;
  font-family: 'Avenir-Medium';
  font-size:13px;
  color: #333333;
  width: 100%;
  text-align:center;
  cursor: pointer;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.12);
  
  &:hover {
    color :#FF6C58;
    border-color:#FF6C58;
  }
  @media(min-width : 768px){
    font-size:22px;
    width: 490px;
  }
  @media(min-width: 1025px){
    font-size: 22px;
    width: 300px;
  }
  @media(min-width:1920px){
    width:480px;
    height:80px;
    font-size:28px;
  }
`;


TypeSelectorWrapper.ComponentWrapper = styled.div`
  height: 100%;
`;

TypeSelectorWrapper.ComponentWrapperScroll = styled(Scrollbars)`
  .component-wrapper-scroll-wrapper {

  }
`;
TypeSelectorWrapper.ContinueButton = styled.button`
  background-color: #FF6C58;
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-family: Avenir-Medium;
  cursor: pointer;
  padding: 12px 30px;
  text-decoration: none;
  outline: none;
  border-radius: 5px;
  border: 2px solid #FF6C58;
  &:hover {
    background-color: #FF3B21;
  }
  @media(min-width: 1920px) {
    font-size: 20px;
  }
  a{
    color: #FF6C58;
  }
`;
TypeSelectorWrapper.DisableButton = styled.button`
  background-color: #b6b6b6;
  color: #676767;
  width: 100%;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-family: Avenir-Medium;
  cursor: pointer;
  padding: 12px 30px;
  text-decoration: none;
  outline: none;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: #b6b6b6;
  border-image: initial;
  @media(min-width: 1920px) {
    font-size: 20px;
  }
  a{
    color: #FF6C58;
  }
`;
TypeSelectorWrapper.PaymentControllerWrapper = styled.div`
  text-align:center;
  padding: 7px 16px;
  background-color: #fff;
  @media(min-width: 832px) {
    padding: 13px;
  }
  @media(min-width:1025px){
    margin: 0 42px;
    box-shadow: none;
  }
`;
TypeSelectorWrapper.OptionWrapper = styled.div`
  padding-bottom: 15px;
  @media(min-width:832px){
    padding: 10px 29px;
  }
`;
TypeSelectorWrapper.HeaderText = styled.div`
  font-family: Gilroy-Light;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #ff6c58;
  padding: 25px 0 12px;
  @media(min-width:832px){
    font-size: 24px;
    padding: 45px 0 37px;
  }
  @media(max-width:831px){
    margin: 0 auto;
  }
`;
TypeSelectorWrapper.ButtonWrapper = styled.div`
  text-align:center;
`;
TypeSelectorWrapper.Button = styled.button`
  width:100%;
  max-width:364px;
  height:56px;
  background-color:white;
  color:rgba(51, 51, 51, 1);
  border: 3px solid rgba(51, 51, 51, 0.72); 
  border-radius:19px;
  font-size:16px;
  font-family: 'Avenir-Medium';
  box-shadow: -2px 6px 8px rgba(0, 0, 0, 0.12);
  margin-bottom:25px;
  outline:none;
  cursor: pointer;
  &:hover {
    color :#FF6C58;
    border-color:#FF6C58;
  }
  @media(min-width: 768px){
    max-width:500px;
    height:80px;
    font-size:28px;
    margin-bottom:40px;
  }
  @media(min-width: 1025px){
    max-width:325px;
    height:53px;
    font-size:20px;
  }
  @media(min-width:1920px){
    max-width: 475px;
  }
`;
TypeSelectorWrapper.Type = styled.div`
  padding-bottom: 25px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.1);}
  @media(max-width: 832px){
    padding-bottom: 12px;
  }
`;
TypeSelectorWrapper.Image = styled.span`
  display: block;
  background-color: #d3e7ef;
  background: ${props => props.imageUrl && `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 107px;
`;
TypeSelectorWrapper.Label = styled.span`
  display: block;
  font-family: Gilroy-Extrabold;
  font-size: 50px;
  line-height: .89;
  padding-top: 10px;
  letter-spacing: normal;
  text-align: center;
  color: #2f839d;
  @media(min-width: 832px){
    font-size: 50px;
    line-height: 45px;
    padding-top: 9px;
  }
`;
TypeSelectorWrapper.Description = styled.span`
  display: block;
  font-family: Gilroy-Light;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #999999;
  max-width: 225px;
  margin: 0 auto;
  @media(min-width: 768px){
    margin: 0 auto;
    width: 200px;
  }
`;
TypeSelectorWrapper.UL = styled.ul`
  color: #AAAAAA;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #333;
`;
TypeSelectorWrapper.LI = styled.li`
  color: #AAAAAA;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #333;
`;


export default TypeSelectorWrapper;
