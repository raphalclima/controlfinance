import React from 'react';
import { Redirect } from 'react-router-dom';

import SideBar from '../../../components/menu/sidebar';
import Header from '../../../components/header';

import {
  Container, Content, MainBlock,
} from './styles';

const user = localStorage.getItem('@finance-map/user');
const logged = !!user;

const App: React.FC = () => (
  <div className="App">
    { logged ? <Redirect to="/" /> : <Redirect to="/login" /> }
    <Container>
      <SideBar />
      <MainBlock>
        <Header title="Home" />
        <Content flexGrow={1}>
          <span> Content </span>
        </Content>
      </MainBlock>
    </Container>
  </div>
);

export default App;
