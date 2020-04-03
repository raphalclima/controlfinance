import React from 'react';

import { Container, Button as Btn } from './styles';

interface Props {
  type: any;
  text: string;
}

const Button : React.FC<Props> = (props) => (
  <Container>
    <Btn type={props?.type}>{ props?.text }</Btn>
  </Container>
);

export default Button;
