import styled from 'styled-components';

export const Ul = styled.ul`
  padding-top: 10px;
  .selected {
    //border: 2px solid green;
    color: #fff;
    background: #2f839d;
  }
`;

export const Li = styled.li`
  max-width: 315px;
  width: 100%;
  padding: 21px 50px 21px 35px;
  border: 1px solid #2f839d;
  border-radius: 30px;
  font-family: Gilroy-Bold;
  font-size: 18px;
  line-height: 20px;
  color: #2f839d;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand:after {
    content: '';
    position: absolute;
    top: 15px;
    width: 30px;
    height: 30px;
    display: inline-block;
    padding-left: 10px;
    margin-left: 10px;
    background: url('../../assets/images/card-icons/default-icon.svg') no-repeat;
  }

  &.selected .brand:after {
    background: url('../../assets/images/card-icons/default-icon-white.svg') no-repeat;
    width: 20px;
    height: 20px;
    background-size: 100% 100%;
    top: 19px;
  }

  .closeBtn {
    position: absolute;
    right: 17px;
    color: #2f839d !important;
  }
`;
