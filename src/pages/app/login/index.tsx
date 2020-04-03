import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router';
import { SubmitHandler, FormHandles } from '@unform/core';

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

          formRef.current?.setFieldError(field, error);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(`Error :${err}`);
        }
      },
    );
  };
  const isMobile = () => window.innerWidth <= 768;

  return (
    <Container>
      { redirect && <Redirect to="/" /> }
      { isMobile && <BackGroundLogin />}
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
      <BackGroundComplement />
    </Container>
  );
};

export default Login;
