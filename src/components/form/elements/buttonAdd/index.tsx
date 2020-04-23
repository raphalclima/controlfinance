import React from 'react';

import {
  Container, Button as Btn, Icon, Title,
} from './styles';
import { Add } from '../../../../assets/index';

interface Props {
  type: any;
  text: string;
  handleClick(): void;
}

const Button : React.FC<Props> = (props) => (
  <Container>
    <Btn type={props?.type} onClick={() => props?.handleClick()}>
      <Icon>
        <Add />
      </Icon>
      <Title>
        { props?.text }
      </Title>
    </Btn>
  </Container>
);

export default Button;
