import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import { useField } from '@unform/core';

import {
  Container, Dropdown, Title, OptionList, OptionItem, TitleItem, Span,
} from './styles';

import { Expand, Contract } from '../../../../assets';

interface Tag {
  id: number;
  title: string;
}

interface Props {
  listTags: Tag[];
  name: string;
  icon(): JSX.Element;
}

const Select: React.FC<Props> = (props) => {
  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(props?.name);

  const [active, setActive] = useState<boolean>(false);
  const [activeList, setActiveList] = useState<boolean>(false);
  const [itemSelect, setItemSelect] = useState<string>('Tag');

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
      path: 'value',
    });

    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener, fieldName, registerField]);

  const selectItem = (item: Tag) => {
    setItemSelect(item.title);
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
      >
        { !activeList && <Expand handlerClick={() => setActiveList(!activeList)} />}
        { activeList && <Contract handlerClick={() => setActiveList(!activeList)} />}
        <Title defaultTitle={itemSelect === 'Tag'}>{ itemSelect }</Title>
        <Icon />
      </Dropdown>
      <OptionList activeList={activeList}>
        { props?.listTags.map((item: Tag) => (
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
