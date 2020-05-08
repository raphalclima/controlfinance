import styled from 'styled-components';

enum Type {
  Provento,
  Desconto
}

interface Props {
  qtdCard?: number;
  type?: Type;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 2px solid;
  border-color: ${(props) => (props.type === Type.Provento ? '#81c14b' : '#d64045')};
  cursor: pointer;
  height: 150px;
  width: calc(95% / ${(props) => (props.qtdCard)});
  margin-left: calc(5% / (${(props) => (props.qtdCard)} + 1));
  margin-bottom: calc(5% / (${(props) => (props.qtdCard)} + 1));

  &:hover {
      border-color: ${(props) => (props.type === Type.Provento ? '#81c14b' : '#d64045')};
      
      span {
          color: ${(props) => (props.type === Type.Provento ? '#81c14b' : '#d64045')};
      }
  }
`;

export const Color = styled.div<Props>`
  position: relative;
  display: flex;
  background-color: #cccccc;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  width: 100%;
  height: 40%;

  svg {
    position: absolute;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-items: center;
  align-items: center;
  justify-content: center
  margin-left: 2px;
  margin-right: 2px;
`;

export const Span = styled.span`
  display: flex;
  color: #595959;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: center;
`;

export const Value = styled.span`
  display: flex;
  width: 50%;
  height: 100%;
  color: #595959;
  font-size: 25px;
  letter-spacing: 1px;
  line-height: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
  margin-right: 2px;
`;

export const Separator = styled.div`
  border-left: 1px solid #a5a5a5;
  height: 80%;
  width: 2px;
`;

export const ContainerMoreOption = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #F7F8FC;
  right: 30px;
  top: 5px;
  z-index: 901;
  width: 80px;
  height: 50px;
  border-radius: 5px;
`;

export const Option = styled.span`
  display: flex;
  justify-content: center;
  line-height: 25px;
  color: grey !important;

  &:hover {
    color: #333 !important;
  }
`;
