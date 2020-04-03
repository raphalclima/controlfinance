import styled from 'styled-components';

interface Props{
  expandMenu: boolean;
}

export const Container = styled.div<Props>`
  display:flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: ${(props) => (props.expandMenu ? 'left' : 'center')};
  padding-left: ${(props) => (props.expandMenu ? '20px' : '0px')};
  transition-property: padding;
  transition-duration: 0.5s;

  span {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 20px;
    letter-spacing: 0.4px;
    margin-left: 20px;
    color: #A4A6B3;
  }
`;
