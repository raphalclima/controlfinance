import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 50px;
  cursor: pointer;
  justify-content: left;
  padding-left: 25px;
  transition-property: padding;
  transition-duration: 0.5s;

  background-color: ${(props) => (props.active ? 'rgba(221,226,255, 0.08)' : '')};
  &:hover {
    background-color: rgba(221,226,255, 0.08);
  }

  span{
    font-family: Muli;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #FFF;
    margin-left: 20px;
  }
`;

export const ActiveBar = styled.div`
  height: 50px;
  width: 3px;
  background-color: #89229B;
  position: absolute;
  left: 0;

  span{
    color: #89229B !important;
  }
`;
