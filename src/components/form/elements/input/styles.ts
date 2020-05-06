import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  color: #ec2300;
  font-size: 13px;
`;

export const TextBox = styled.input<Props>`
  border: none;
  height: 50px;
  font-size: 14px;
  padding-left: 42px;
  color: rgb(255, 255, 255);
  font: 400 13.3333px Arial;
  background:#333;

  width: 100%;
  outline: 0px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.active ? '#89229B' : '#919191')};
  border-image: initial;
  border-radius:5px;
  transition: border 0.2s ease 0s;
`;
