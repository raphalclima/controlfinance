import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { Link as Navigate } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #353535;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  min-height: 100vh;
  width: 100%;
  max-width: 520px;
  flex: 1 1 0%;
  padding: 32px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  flex: 1 1 0%;
  padding: 28px 0px 50px;
`;

export const PanelLogin = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 0px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #474747;
  box-shadow: -1px -1px 1px #784A78, 1px 1px 1px #784A78;
  border-radius: 5px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto 32px;
`;

export const Title = styled.span`
  font-family: sans-serif;
  margin: 0px auto 32px;
  font-size: 25px;
  font-weight: 600;
  color: rgb(255, 255, 255);
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  margin: auto;
`;

export const Forgot = styled.div`
    width: 100%;
    margin: 0px auto 10px;
`;

export const Signup = styled.div`
  span {
    color: rgb(255, 255, 255);
    font-size: 15px;
  }
`;

export const Link = styled(Navigate)`
  font-size: 15px;
  color: rgb(255, 255, 255);
  opacity: 0.8;
  transition: opacity 0.1s ease 0s;

  &:hover {
    text-decoration: underline !important;
    opacity: 1;
  }

  &:focus, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
