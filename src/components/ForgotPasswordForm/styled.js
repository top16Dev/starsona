import styled from 'styled-components';

const ForgotPasswordWrap = styled.div`
  margin-top:5%;
`;
ForgotPasswordWrap.loaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.3);
`;
ForgotPasswordWrap.Heading = styled.div`
  font-family: Gilroy;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  padding-top: 12px;
  color: #ff6c58;
  margin-bottom: -8px;

  @media(max-width:831px){
    padding-top: 29px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  &+ .image-wrap {
    margin-top: 0;
  }
`;
ForgotPasswordWrap.Message = styled.div`
`;
ForgotPasswordWrap.Logo = styled.div`
display: block;
background: ${props => props.imageUrl && `url(${props.imageUrl})`};
background-repeat: no-repeat;
background-position: center;
background-size: contain;
height: 236px;
margin-bottom: 3px;
margin-top: 34px;
@media(max-width:831px){
  height: 180px;
  background-size: 264px auto;
  margin-bottom: 11px;
  margin-top: 60px;
}
`;
ForgotPasswordWrap.MailContent = styled.div`
  color: #666666;
  font-size: 19px;
  font-family: Gilroy;
  /* color: #555555; */
  padding-top: 22px;
  padding-bottom: 31px;
  text-align: left;
  line-height: 26px;
`;


export { ForgotPasswordWrap };
