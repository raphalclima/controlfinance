import styled from 'styled-components';

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

export const SvgSelectBox = styled.svg`
  position: absolute;
  cursor: pointer;
  right: 5px;
  top: 12px;
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

export const SvgPointerWithOpacity = styled.svg`
  cursor: pointer;
  opacity: 0.3;
  margin-left: 5px;

  &:hover {
    opacity: 1;
  }
`;
