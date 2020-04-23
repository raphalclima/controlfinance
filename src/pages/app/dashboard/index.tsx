import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../../components/header';
import {
  Container, Content, MainBlock,
} from './styles';

const Dashboard: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const user = localStorage.getItem('@finance-map/user');
  const logged = !!user;

  return (
    <>
      { !logged && <Redirect to="/login" /> }
      <Header handlerMenu={() => setMenuActive(!menuActive)} />
      <Container>
        <MainBlock>
          <Content flexGrow={1} menuActive={menuActive}>
            <span> Content </span>
          </Content>
        </MainBlock>
      </Container>
    </>
  );
};

export default Dashboard;
