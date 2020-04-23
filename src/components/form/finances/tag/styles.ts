import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #C6C7CA;
  opacity: 0.4;
  z-index: 901;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 902;
  padding: 32px;
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
  position: relative;
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

export const Title = styled.h2`
  font-family: Muli;
  font-size: 22px;
  font-weight: 600;
  margin: 0px auto 32px;
  letter-spacing: 0.4px;
  color: #fff;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  margin: auto;
`;
