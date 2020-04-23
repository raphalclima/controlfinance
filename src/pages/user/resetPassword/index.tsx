import React, { useRef, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';

import {
  Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

import Api from '../../../services/api';
import { Input, Button } from '../../../components/form';
import Footer from '../../../components/footer';
import {
  Lock, BackGroundForgot, BackGroundComplement,
} from '../../../assets';

interface FormData {
  password: string;
  confirmPassword: string;
}

interface RouteParams {
  token: string;
}

const ResetPassword : React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const params = useParams<RouteParams>();
  const [logged, setLogged] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, []);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    if (!data.password && !data.confirmPassword) {
      formRef.current?.setFieldError('confirmPassword', 'Favor informar nova senha!'); // eslint-disable-line
    } if (data.password !== data.confirmPassword) {
      formRef.current?.setFieldError('confirmPassword', 'As senhas não são iguais!'); // eslint-disable-line
    }

    const newData = { password: data.password, passwordResetToken: params.token };

    await Api.post('/users/reset_password', newData).then(
      (res) => {
        const { user, token } = res.data;
        const storageData = { ...user, _token: token };
        localStorage.setItem('@finance-map/user', JSON.stringify(storageData));

        setLogged(!logged);
      },
      (err) => {
        if (err.response) {
          const { error } = err.response.data;
          console.log(`Error response: ${error}`);
        } else if (err.request) {
          console.log(`Error request: ${err.request}`);
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
        { !isMobile && <BackGroundForgot /> }
        <MainBlock>
          <Panel>
            <Content>
              <Title>Criar Nova Senha</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="password"
                  name="password"
                  placeholder="Nova Senha"
                  icon={Lock}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar Senha"
                  icon={Lock}
                />
                <Button type="submit" text="Confirmar" />
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

export default ResetPassword;
