import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';

import Api from '../../../services/api';
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

interface ErrorApi {
  field: string;
  error: string;
}

const Signup : React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [logged, setLogged] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, []);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    await Api.post('/users', data).then(
      (res) => {
        const { user, token } = res.data;
        const newData = { ...user, _token: token };
        localStorage.setItem('@finance-map/user', JSON.stringify(newData));

        setLogged(!logged);
      },
      (err) => {
        if (err.response) {
          const { error } = err.response.data;
          error.map((item: ErrorApi) => formRef.current?.setFieldError(item.field, item.error));
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
      { logged && <Redirect to="/app/dashboard" />}
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
