import styled from 'styled-components'

const CompletedStyled = styled.div`
  .pagination-wrapper {
    margin: 13px 0;
  }
  @media(min-width: 832px) {
    .pagination-wrapper {
      margin: 0;
      position: absolute;
      right: 0;
      &.top {
        top: 0;
      }
      &.bottom {
        bottom: 0;
      }
    }
  }
`;

CompletedStyled.FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .drop-down {
    margin-bottom: 13px!important;
  }
  .search-root {
    height: 50px;
    border-radius: 10px;
    .search-input-container {
      background: #fff;
    }
  }
  @media(min-width: 832px) {
    flex-direction: row;
    justify-content: space-between;
    .drop-down {
      margin-right: 16.4px;
      &.filter, &.sort-by {
        width: 200px;
      }
    }
  }
`;

CompletedStyled.ListSection = styled.div`

`;

export default CompletedStyled;
