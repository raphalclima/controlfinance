import styled from 'styled-components';

interface Props {
  activeMenu: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  z-index: 901;
  display: flex;
  flex-direction: column;
  top: 0px;
  left: ${(props) => (props?.activeMenu ? '0px' : '-305px')};
  width: 300px;
  background-color: #353535;
  height: 100%;
  transition-property: left;
  transition-duration: 0.5s;
`;

export const MenuItemList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;
