import React, { useRef, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector, useDispatch } from 'react-redux';

import { AplicationState } from '../../../store';
import * as UserActions from '../../../store/ducks/User/types';
import { Input, Button } from '../../../components/form';
import Footer from '../../../components/footer';
import {
  Lock, BackGroundForgot, BackGroundComplement,
} from '../../../assets';

import {
  Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

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
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);
  const dispatch = useDispatch();
  const userRepository: UserActions.UserState = (
    useSelector<AplicationState>((state) => state.user) as UserActions.UserState);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
    return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1000));
  }, []);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    const newData = { password: data.password, passwordResetToken: params.token };

    if (!data.password && !data.confirmPassword) {
      formRef.current?.setFieldError('confirmPassword', 'Favor informar nova senha!'); // eslint-disable-line
    } if (data.password !== data.confirmPassword) {
      formRef.current?.setFieldError('confirmPassword', 'As senhas não são iguais!'); // eslint-disable-line
    }

    dispatch({
      type: UserActions.UserTypes.LOAD_REQUEST,
      routeUrl: '/users/reset_password',
      routeData: newData,
    });
  };

  return (
    <>
      { userRepository.data.token && <Redirect to="/app" />}
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
