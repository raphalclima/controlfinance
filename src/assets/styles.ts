import styled from 'styled-components';

interface Props {
  position?: boolean;
  activeList?: boolean;
}

export const Svg = styled.svg`
  left: 17px;
  top: 17px;
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 14px;
`;

export const SvgBackGround = styled.svg`
  margin-bottom: 50px;
`;

export const SvgBackGroundComplement = styled.svg`
  margin-bottom: 250px;
`;

export const SvgPointer = styled.svg`
  cursor: pointer;
`;

export const SvgSelectBox = styled.svg<Props>`
  position: ${(props) => (props.position ? 'absolute' : 'initial')};
  cursor: pointer;
  right: ${(props) => (props.position ? '5px' : '0')};
  top: ${(props) => (props.position ? '12px' : '0')};
`;

export const SvgClose = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const SvgPointerWithOpacity = styled.svg<Props>`
  cursor: pointer;
  margin-left: 5px;
  max-height: ${(props) => (props.activeList ? '200px' : '0px')};
  opacity: ${(props) => (props.activeList ? '0.3' : '0')};
  transition: max-height 0.3s linear;

  &:hover {
    opacity: 1;
  }
`;

export const SvgIcon = styled.svg`
  position: absolute;
  margin-left: 5px;
  margin-top: 5px;
`;
