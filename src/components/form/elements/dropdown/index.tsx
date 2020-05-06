import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { useField } from '@unform/core';

import {
  Container, Dropdown, Title, OptionList, OptionItem, TitleItem, Span,
} from './styles';

import { Expand, Contract } from '../../../../assets';

interface Item {
  id: string;
  title: string;
}

interface Props {
  value?: string;
  listItens: Item[];
  name: string;
  icon(): JSX.Element;
}

const Select: React.FC<Props> = (props) => {
  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(props?.name);

  const [active, setActive] = useState<boolean>(false);
  const [activeList, setActiveList] = useState<boolean>(false);
  const [itemSelect, setItemSelect] = useState<Item>(
    props?.value ? props?.listItens.find((item) => item.id === props?.value) as Item : { title: 'Tag' } as Item,
  );

  const Icon = props?.icon;

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (active) { setActive(!active); }
      if (activeList) { setActiveList(!activeList); }
    }
  }, [active, activeList]);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(selectRef?.current! as any).contains(e.target)) {
        if (active) { setActive(!active); }
        if (activeList) { setActiveList(!activeList); }
      }
    },
    [active, activeList],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'title',
    });

    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener, fieldName, registerField]);

  const selectItem = (item: Item) => {
    setItemSelect(item);
    setActiveList(!activeList);
    setActive(!active);
  };

  const handlerClick = () => {
    setActive(!active);
    setActiveList(!activeList);
  };

  return (
    <Container>
      <Dropdown
        ref={selectRef}
        onClick={() => handlerClick()}
        active={active}
        title={itemSelect.id}
      >
        { !activeList
        && <Expand position mini={false} handlerClick={() => setActiveList(!activeList)} />}
        { activeList
        && <Contract position mini={false} handlerClick={() => setActiveList(!activeList)} />}
        <Title defaultTitle={itemSelect.title === 'Tag'}>{ itemSelect.title }</Title>
        <Icon />
      </Dropdown>
      <OptionList activeList={activeList}>
        { props?.listItens.map((item: Item) => (
          <OptionItem
            key={item.id}
            onClick={() => selectItem(item)}
          >
            <TitleItem>{ item.title }</TitleItem>
          </OptionItem>
        )) }
      </OptionList>
      {error && <Span>{error}</Span> }
    </Container>
  );
};

export default Select;
