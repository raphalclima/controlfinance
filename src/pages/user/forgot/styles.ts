import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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
  width: 100%;
  max-width: 520px;
  min-height: 100vh;
  flex: 1 1 0%;
  padding: 32px;
`;

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  flex: 1 1 0%;
  padding: 28px 0px 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 50px 0px 50px;
  background-color: #474747;
  box-shadow: -1px -1px 1px #784A78, 1px 1px 1px #784A78;
  border-radius: 5px;
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
