import React, {
  useState, useRef, useEffect, useCallback, useContext,
} from 'react';

import { CardFinanceContext } from '../../form/context';
import { Money, MoreOptions } from '../../../assets';
import {
  Container, Color, Content, Info, Span, Value, Separator,
  ContainerMoreOption, Option,
} from './styles';

enum Type {
  Provento,
  Desconto
}

interface Props {
  qtdCard: number;
  id: string;
  type: Type;
  value: number;
  tag: string;
  origin: string;
}

const CardFinance: React.FC<Props> = (props) => {
  const [moreOptions, setMoreOptions] = useState<boolean>(false);
  const ref = useRef(null);
  const { removeItem, editItem } = useContext(CardFinanceContext);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (moreOptions) { setMoreOptions(!moreOptions); }
    }
  }, [moreOptions]);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref?.current! as any).contains(e.target)) {
        if (moreOptions) { setMoreOptions(!moreOptions); }
      }
    },
    [moreOptions],
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  const Options = () => (
    <ContainerMoreOption>
      <Option onClick={() => editItem(props?.id)}>Editar</Option>
      <Option onClick={() => removeItem(props?.id)}>Excluir</Option>
    </ContainerMoreOption>
  );

  return (
    <Container
      id={props?.id}
      ref={ref}
      qtdCard={props?.qtdCard}
      type={props?.type}
    >
      <Color type={props?.type}>
        <Money type={props?.type === Type.Provento} />
        <MoreOptions handleClick={() => setMoreOptions(!moreOptions)} />
        {moreOptions && <Options />}
      </Color>
      <Content>
        <Info>
          <Span>{props?.tag}</Span>
          <Span>{props?.origin}</Span>
        </Info>
        <Separator />
        <Value>
          $
          {' '}
          {props?.value}
        </Value>
      </Content>
    </Container>
  );
};

export default CardFinance;
