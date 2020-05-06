import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 16px;
  height: 50px;
  width: 100%;
  background-color: transparent;
  border: 1px solid #89229B;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(221,226,255, 0.08);
  }
`;

export const Icon = styled.i`
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  width: 70px;
  font-size: 15px;
  text-align: center;
  padding-bottom: 2px
`;
