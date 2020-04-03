import React from 'react';

import {
  Container, Icons, Title, Avatar, Separator,
} from './styles';

import { BellNews } from '../../assets';

interface Props {
  title: string;
}

const Footer : React.FC<Props> = (props) => (
  <Container>
    <Title>{ props?.title }</Title>
    <Icons>
      <BellNews />
      <Separator />
      <Avatar src="https://www.samservicos.com.br/wp-content/uploads/2019/02/user-sam.png" />
    </Icons>
  </Container>
);

export default Footer;
