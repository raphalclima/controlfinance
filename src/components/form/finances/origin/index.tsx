import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';

import Button from '../../elements/button';
import Input from '../../elements/input';
import Dropdown from '../../elements/dropdown';

import { CloseCircle, Truck, Tag as TagIcon } from '../../../../assets';

import {
  Block, Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

import Api from '../../../../services/api';

interface Tag {
  id: number;
  title: string;
}

interface Props {
  handlerClose(): void;
}

const Origin: React.FC<Props> = (props) => {
  const formRef = useRef<FormHandles>(null);
  const listTags: Tag[] = [
    {
      id: 1,
      title: 'Padaria',
    },
    {
      id: 2,
      title: 'Posto de Gasolina',
    },
    {
      id: 3,
      title: 'Presentes para Rafaelle',
    },
  ];

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    await Api.post('/users/forgot_password', data).then(
      (res) => {
        alert('Tag cadastrada com sucesso!');
      },
      (err) => {
        if (err.request) {
          console.log(`Error request: ${err.request}`);
        } else {
          console.log(`Error :${err}`);
        }
      },
    );
  };

  return (
    <>
      <Block />
      <Container>
        <MainBlock>
          <Panel>
            <Content>
              <CloseCircle handlerClick={() => props?.handlerClose()} />
              <Title>Cadastro de Origem</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="text"
                  name="title"
                  placeholder="Origem"
                  icon={Truck}
                />
                <Dropdown
                  name="tag"
                  listTags={listTags}
                  icon={TagIcon}
                />
                <Button type="submit" text="Criar" />
              </Form>
            </Content>
          </Panel>
        </MainBlock>
      </Container>
    </>
  );
};

export default Origin;
