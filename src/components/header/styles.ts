import styled from 'styled-components';

export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  margin-left: 14px;
  border: 1px solid #DFE0EB;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #2c2c2c;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 25px
`;

export const Separator = styled.div`
  border-left: 1px solid #DFE0EB;
  margin-left: 13px;
  height: 32px;
  width: 2px;
`;
