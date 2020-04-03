import React from 'react';

import { Container, ActiveBar } from './styles';

interface Props {
    title: string;
    Icon(): JSX.Element;
    active: boolean;
    expandMenu: boolean;
    handlerClick(): void;
}

const MenuItem : React.FC<Props> = (props) => {
  const Icon = props?.Icon;

  return (
    <Container
      active={props?.active}
      expandMenu={props?.expandMenu}
      onClick={() => props?.handlerClick()}
    >
      { props?.active && <ActiveBar /> }
      <div><Icon /></div>
      { props?.expandMenu && (
      <span>{ props?.title }</span>
      )}
    </Container>
  );
};

export default MenuItem;
