import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  height: 130px;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  transition-property: padding;
  transition-duration: 0.5s;
  background: #2c2c2c;
  border-bottom: 1px solid #222324;
  box-shadow: 0 1px 0 #31343D;

  span {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: #FFF;
    text-align: center;
    width: 100%;
  }
`;
