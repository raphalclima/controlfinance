import React, { useRef, useState } from 'react';
import { Redirect, useParams } from 'react-router';
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

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    if (!data.password && !data.confirmPassword) { formRef.current?.setFieldError('confirmPassword', 'Favor informar nova senha!'); }
    if (data.password !== data.confirmPassword) { formRef.current?.setFieldError('confirmPassword', 'As senhas não são iguais!'); }

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
    <Container>
      { logged && <Redirect to="/" />}
      <BackGroundForgot />
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
      <BackGroundComplement />
    </Container>
  );
};

export default ResetPassword;
