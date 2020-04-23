import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';

import Button from '../../elements/button';
import Input from '../../elements/input';

import { Tag as IconTag, CloseCircle } from '../../../../assets';

import {
  Block, Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

import Api from '../../../../services/api';

interface Props {
  handlerClose(): void;
}

const Tag: React.FC<Props> = (props) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    await Api.post('/tags', data).then(
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
              <Title>Cadastro de Tag</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="text"
                  name="title"
                  placeholder="Tag"
                  icon={IconTag}
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

export default Tag;
