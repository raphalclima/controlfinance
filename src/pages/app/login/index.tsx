import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector, useDispatch } from 'react-redux';

import { AplicationState } from '../../../store';
import * as UserActions from '../../../store/ducks/User/types';
import Api from '../../../services/api';
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
  const [redirect, setRedirect] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);
  const teste = useSelector((state: AplicationState) => state.user.data);
  console.log('resultado do selector:');
  console.log(teste);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('chamadno dispatch');
    dispatch({ type: UserActions.UserTypes.LOAD_REQUEST, username: 'testeas', password: 'teste' });
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, [dispatch]);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    await Api.post('/users/authenticate', data).then(
      (res) => {
        const { user, token } = res.data;
        const newData = { ...user, _token: token };
        localStorage.setItem('@finance-map/user', JSON.stringify(newData));

        setRedirect(!redirect);
      },
      (err) => {
        if (err.response) {
          const { field, error } = err.response.data;

          formRef.current?.setFieldError(field, error); // eslint-disable-line
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(`Error :${err}`);
        }
      },
    );
  };

  return (
    <>
      { redirect && <Redirect to="/app/dashboard" /> }
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
