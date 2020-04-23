import styled from 'styled-components';

interface Props {
  flexGrow: number;
  menuActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F7F8FC;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-column: column;
  background-color: ${(props) => (props.menuActive ? '#C6C7CA' : '#F7F8FC')};
  padding: 30px;  
  flex-grow: ${(props) => props.flexGrow};
`;
