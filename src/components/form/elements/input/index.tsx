import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container, TextBox, Span } from './styles';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  icon(): JSX.Element;
}

const Input : React.FC<Props> = (props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(props?.name);

  const [active, setActive] = useState<boolean>(false);
  const Icon = props?.icon;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <TextBox
        ref={inputRef}
        type={props?.type}
        placeholder={props?.placeholder}
        onFocus={() => setActive(!active)}
        onBlur={() => setActive(!active)}
        active={active}
      />
      <Icon />
      {error && <Span>{error}</Span> }
    </Container>
  );
};
export default Input;
