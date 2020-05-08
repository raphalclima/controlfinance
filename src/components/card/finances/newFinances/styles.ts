import styled from 'styled-components';

interface Props {
  qtdCard: number;
}

export const Container = styled.div<Props>`
  display: flex;
  background-color: #cccccc;
  border-radius: 10px;
  border: 1px solid;
  border-color: #cccccc;
  cursor: pointer;
  height: 150px;
  width: calc(95% / ${(props) => (props.qtdCard)});
  margin-left: calc(5% / (${(props) => (props.qtdCard)} + 1));
  margin-bottom: calc(5% / (${(props) => (props.qtdCard)} + 1));
  justify-content: center;
  align-items: center;
`;
