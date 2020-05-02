import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector, useDispatch } from 'react-redux';

import { AplicationState } from '../../../store';
import * as UserActions from '../../../store/ducks/User/types';
import {
  Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

import { Input, Button } from '../../../components/form';
import Footer from '../../../components/footer';
import {
  User, Lock, Email, CardIdentity, BackGroundSignup, BackGroundComplement,
} from '../../../assets';

interface FormData {
  nickname: string;
  username: string;
  password: string;
  email: string;
}

const Signup : React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);
  const dispatch = useDispatch();
  const userRepository: UserActions.UserState = (
    useSelector<AplicationState>((state) => state.user) as UserActions.UserState);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, []);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    dispatch({
      type: UserActions.UserTypes.LOAD_REQUEST,
      routeUrl: '/users',
      routeData: data,
    });
  };

  const mapError = () => {
    userRepository.error.map((item) => formRef.current?.setFieldError(item.field, item.error));
  };

  return (
    <>
      { userRepository.data.token && <Redirect to="/app" />}
      { userRepository.error.length !== 0 && mapError()}
      <Container>
        { !isMobile && <BackGroundSignup /> }
        <MainBlock>
          <Panel>
            <Content>
              <Title>Cadastro de Usuário</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="text"
                  name="nickname"
                  placeholder="Apelido"
                  icon={CardIdentity}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  icon={Email}
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  icon={User}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  icon={Lock}
                />
                <Button type="submit" text="Cadastrar" />
              </Form>
            </Content>
          </Panel>
          <Footer />
        </MainBlock>
        { !isMobile && <BackGroundComplement /> }
      </Container>
    </>
  );
};

export default Signup;
