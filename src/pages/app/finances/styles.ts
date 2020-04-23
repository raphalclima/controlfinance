import styled from 'styled-components';

interface Props {
  menuActive: boolean;
}

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 50px);
`;

export const MainBlock = styled.div`
  width: 100%;
  heigth: 100%;
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
`;

export const ItemList = styled.li`
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
      font-family: Muli;
    }
  }
`;

export const ItemIcons = styled.i`
  display: flex;
  flex-direction: row;
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
  opacity: ${(props) => (props.menuActive ? '0.3' : '1')};
  padding: 30px;
  width: calc(100% - 300px);
`;
