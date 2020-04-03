import styled from 'styled-components';

interface Props {
  expandMenu: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  flex-flox: row nowrap;
`;

export const Container = styled.div<Props>`  
  padding-top: 60px;
  width: ${(props) => (props.expandMenu ? '255px' : '60px')};
  background-color: #353535;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  transition-property: width;
  transition-duration: 0.5s;
`;

export const MenuItemList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 55px;
`;

export const Separator = styled.div`
  border-top: 1px solid #DFE0EB;
  margin-top: 16px;
  margin-bottom: 16px;
  opacity: 0.06;
`;
