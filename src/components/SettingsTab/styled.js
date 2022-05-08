import styled from 'styled-components';

const Tabs = styled.div`
  padding: 0px 0px;
  border-bottom: 1px solid #CCCCCC;
  display: flex;
  text-align:center;
  justify-content: space-between;
  position: relative;
  margin-top: 51px;
`;
Tabs.Ul = styled.ul`
  display: block;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;
Tabs.List = styled.ul`
  display: inline-block;
  padding: 5px 19px;
  font-size: 16px;
  width: 188px;
  cursor: pointer;
  font-family: 'Avenir-Bold';
  border-bottom: ${props => (props.selected ? '4px solid #FF6C58' : 'none')};
  color: ${props => (props.selected ? '#FF6C58' : 'black')};;
`;

export default Tabs;
