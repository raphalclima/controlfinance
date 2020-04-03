import styled from 'styled-components';

interface Props {
  active: boolean;
  expandMenu: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 60px;
  cursor: pointer;
  justify-content: ${(props) => (props.expandMenu ? 'left' : 'center')};
  padding-left: ${(props) => (props.expandMenu ? '25px' : '0px')};
  transition-property: padding;
  transition-duration: 0.5s;

  background-color: ${(props) => (props.active ? 'rgba(221,226,255, 0.08)' : '')};
  &:hover {
    background-color: rgba(221,226,255, 0.08);
  }

  span{
    font-family: Muli;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #A4A6B3;
    margin-left: 20px;
  }
`;

export const ActiveBar = styled.div`
  height: 56px;
  width: 3px;
  background-color: #89229B;
  position: absolute;
  left: 0;

  span{
    color: #89229B !important;
  }
`;
