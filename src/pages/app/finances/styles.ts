import styled from 'styled-components';

interface Props {
  menuActive: boolean;
}

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 50px);
`;

export const MainBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #252627;
  width: 300px;
  height: 100%;
`;

export const Title = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 60px;
  font-weight: 200;
  letter-spacing: 0.4px;
  margin: 0;
  color: #fff;
  background: #2c2c2c;
  text-align: center;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  height: 100%;
`;

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

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left 25px;
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

export const ItemTitle = styled.span`
  color: #646871;
  text-decoration: none;
  padding: 0 10px;
  opacity: .99;
  line-height: 40px;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.menuActive ? '#C6C7CA' : '#F7F8FC')};
  opacity: ${(props) => (props.menuActive ? '0.9' : '1')};
  padding: 10px 0 0 0;
  flex-wrap: wrap;
  align-content: flex-start;
  width: calc(100% - 300px);
  max-height: 100%;

  overflow-x: hidden;
  overflow-x: auto;
`;
