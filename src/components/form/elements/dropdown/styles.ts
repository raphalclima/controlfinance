import styled from 'styled-components';

interface Props {
  active?: boolean;
  activeList?: boolean;
  defaultTitle?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;  
  align-items: center;
`;

export const Dropdown = styled.div<Props>`
  position: relative;
  display: flex;  
  height: 50px;
  width: 100%;
  padding-left: 42px;
  background:#333;
  cursor: pointer;
  outline: 0px;
  border-width: 2px;
  border-style: solid;
  border-image: initial;
  border-color: ${(props) => (props.active ? '#89229B' : '#919191')};
  border-radius:5px;
  transition: border 0.2s ease 0s;
`;

export const Title = styled.span<Props>`
  display: flex;
  color: ${(props) => (props.defaultTitle ? '#8e8e8e' : '#FFF')};
  font: 400 13.3333px Arial;
  font-size: 14px;
  align-items: center;
`;

export const OptionList = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: #333;
  width: 100%;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  max-height: ${(props) => (props.activeList ? '200px' : '0px')};
  opacity: ${(props) => (props.activeList ? '1' : '0')};
  transition: max-height 0.3s linear;

  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-image: initial;
  border-color: #89229B;

  overflow-x: hidden;
  overflow-x: auto;

`;

export const OptionItem = styled.li`
  margin: 1px 0px 1px;
  cursor: pointer;
  
  &:hover {
      background: #4D4D4D;
  }
`;

export const TitleItem = styled.span`
  margin: 0px 5px 0px;
  color: #8e8e8e;
  font-size: 14px;
`;

export const Span = styled.span`
  color: #f00;
  font-size: 13px;
`;
