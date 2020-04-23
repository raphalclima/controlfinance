import React from 'react';

import { Container } from './styles';

import { Logo as IconLogo } from '../../../assets';

const Logo : React.FC = () => (
  <Container>
    <div><IconLogo width={40} height={40} /></div>
    <span>Controle Financeiro</span>
  </Container>
);

export default Logo;
