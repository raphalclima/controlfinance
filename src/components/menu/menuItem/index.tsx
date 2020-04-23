import React from 'react';
import { Redirect } from 'react-router-dom';

import { Container, ActiveBar } from './styles';

interface Props {
    title: string;
    Icon(): JSX.Element;
    active: boolean;
    route: string
    handlerClick(): void;
}

const MenuItem : React.FC<Props> = (props) => {
  const Icon = props?.Icon;

  return (
    <Container
      active={props?.active}
      onClick={() => props?.handlerClick()}
    >
      { props?.active && <ActiveBar />}
      { props?.active && <Redirect to={props?.route} />}
      <div><Icon /></div>
      <span>{ props?.title }</span>
    </Container>
  );
};

export default MenuItem;
