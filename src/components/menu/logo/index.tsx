import React from 'react';

import { Container } from './styles';

import { Logo as IconLogo } from '../../../assets';

interface Props {
  expand: boolean;
}

const Logo : React.FC<Props> = (props) => (
  <Container expandMenu={props?.expand}>
    <div><IconLogo width={40} height={40} /></div>
    {props?.expand && <span>Control Finance</span> }
  </Container>
);

export default Logo;
