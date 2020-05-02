import styled from 'styled-components';

interface Props {
  menuActive: boolean;
}

export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  margin-left: 14px;
  border: 1px solid #DFE0EB;
  cursor: pointer;
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px;

  background-color: #2c2c2c;
  opacity: ${(props) => (props.menuActive ? '0.9' : '1')};
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
