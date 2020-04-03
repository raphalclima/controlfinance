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
  background-color: #353535;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px;
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

export const Title = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: '30px';
  letter-spacing: 0.3px;
  color: #FFF;
`;
