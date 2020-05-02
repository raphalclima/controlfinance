import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../store';
import { UserState } from '../../../store/ducks/User/types';
import Header from '../../../components/header';
import {
  Container, Content, MainBlock,
} from './styles';

const Dashboard: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const userRepository: UserState = (
    useSelector<AplicationState>((state) => state.user) as UserState);

  return (
    <>
      { !userRepository.data.token && <Redirect to="/login" />}
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
