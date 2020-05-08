import React from 'react';

import { CardAdd } from '../../../../assets/index';
import { Container } from './styles';


interface Props {
  qtdCard: number;
  handleClick(): void;
}

const Select: React.FC<Props> = (props) => (
  <Container
    onClick={() => props?.handleClick()}
    qtdCard={props?.qtdCard}
  >
    <CardAdd handleClick={() => props?.handleClick()} />
  </Container>
);

export default Select;
