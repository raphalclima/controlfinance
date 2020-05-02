import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector, useDispatch } from 'react-redux';

import { AplicationState } from '../../../store';
import * as UserActions from '../../../store/ducks/User/types';
import { Input, Button } from '../../../components/form';
import Footer from '../../../components/footer';
import {
  Lock, User, BackGroundLogin, BackGroundComplement,
} from '../../../assets';

import {
  Container, MainBlock, ContainerLogin, PanelLogin,
  Form, Link, Title, Forgot, Signup,
} from './styles';


interface FormData {
  username: string,
  password: string,
}

const Login : React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);
  const dispatch = useDispatch();
  const userRepository: UserActions.UserState = (
    useSelector<AplicationState>((state) => state.user) as UserActions.UserState);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, []);

  const handleSubimit : SubmitHandler<FormData> = (data) => {
    dispatch({
      type: UserActions.UserTypes.LOAD_REQUEST,
      routeUrl: '/users/authenticate',
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
        { !isMobile && <BackGroundLogin />}
        <MainBlock>
          <ContainerLogin>
            <PanelLogin>
              <Title>Seja Bem-Vindo!</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
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
                <Forgot>
                  <Link to="/forgot">Esqueci minha senha</Link>
                </Forgot>
                <Button type="submit" text="Login" />
              </Form>
              <Signup>
                <span>Não possui uma conta? </span>
                <Link to="/signup">Abra já a sua!</Link>
              </Signup>
            </PanelLogin>
          </ContainerLogin>
          <Footer />
        </MainBlock>
        { !isMobile && <BackGroundComplement /> }
      </Container>
    </>
  );
};

export default Login;
