import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';

import Api from '../../../services/api';
import {
  Container, MainBlock, Panel, Content, Form, Title,
} from './styles';

import Footer from '../../../components/footer';
import { Input, Button } from '../../../components/form';
import { Email, BackGroundForgot, BackGroundComplement } from '../../../assets';

interface FormData {
  email: string;
}

const Login : React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, []);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    await Api.post('/users/forgot_password', data).then(
      (res) => {
        alert('Aguarde alguns minutos e siga as instruções enviadas por e-mail.');

        setRedirect(!redirect);
      },
      (err) => {
        if (err.response) {
          const { field, error } = err.response.data;
          formRef.current?.setFieldError(field, error); // eslint-disable-line
        } if (err.request) {
          console.log(`Error request: ${err.request}`);
        } else {
          console.log(`Error :${err}`);
        }
      },
    );
  };

  return (
    <>
      { redirect && <Redirect to="/login" /> }
      <Container>
        { !isMobile && <BackGroundForgot /> }
        <MainBlock>
          <Panel>
            <Content>
              <Title>Recuperar Senha</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="Email"
                  name="email"
                  placeholder="E-mail"
                  icon={Email}
                />
                <Button type="submit" text="Enviar" />
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

export default Login;
