import styled from 'styled-components';

interface Props {
  activeList?: boolean;
  hasSubItem?: boolean;
}

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 350px;
  margin-bottom: 10px;
  overflow-x: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar
  {
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
`;

export const SubList = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  margin-left 25px;

  max-height: ${(props) => (props.activeList ? '200px' : '0px')};
  opacity: ${(props) => (props.activeList ? '1' : '0')};
  transition: max-height 0.3s linear;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;  
  cursor: pointer;  
  list-style: none;
  justify-content: space-between;
  align-items: center;

  &:hover {
    span {
      color: #8C8C8C;
      opacity: .99;
    }
  }
`;

export const ItemIcons = styled.i`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-directon: row;
  align-items: center;
`;

export const Title = styled.span<Props>`
  color: #646871;
  text-decoration: none;
  padding: 0 5px;
  opacity: .99;
  line-height: 40px;
  margin-left: ${(props) => (props.hasSubItem ? '0' : '18px')};
`;
