import styled from 'styled-components';

const PaginationStyled =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

PaginationStyled.Details = styled.div`
  font-family: Gilroy-Bold;
  font-size: 18px;
  color: #5d5d5d;
  span {
    color: #b1b1b1;
  }
  @media(min-width: 832px) {
    margin-right: 31px;
  }
`;

PaginationStyled.ArrowWrapper = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  color: #707070;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  outline: none;
  svg {
    ${props => props.disabled && `
      opacity: 0.24;
    `}
  }
  @media(min-width: 832px) {
    &.left-arrow {
      order: 2;
      margin-right: 14px;
    }
    &.right-arrow {
      order: 3;
    }
  }
`;

export default PaginationStyled;
