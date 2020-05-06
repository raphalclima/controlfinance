import React, { useRef, useContext } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../../store';
import { UserState } from '../../../../store/ducks/User/types';
import { TagContext } from '../../context';
import Button from '../../elements/button';
import Input from '../../elements/input';

import { Tag as IconTag, CloseCircle } from '../../../../assets';

import {
  Block, Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

import Api from '../../../../services/api';

interface Props {
  handlerClose(): void;
  dataEdit: TagInterface;
}

interface OriginInterface {
  id: string;
  title: string;
}

interface TagInterface {
  id: string;
  title: string;
  subList: OriginInterface[];
}

interface FormData {
  title: string;
}

interface Response {
  _id: string;
  title: string;
}

const Tag: React.FC<Props> = (props) => {
  const formRef = useRef<FormHandles>(null);
  const { registerItem, updateListTag } = useContext(TagContext);
  const userRepository: UserState = (
    useSelector<AplicationState>((state) => state.user) as UserState);

  const handleSubimit : SubmitHandler<FormData> = async (data) => {
    const config = {
      headers: { Authorization: 'Bearer '.concat(userRepository.data.token) },
    };

    if (props?.dataEdit.id) {
      const newData = {
        id: props?.dataEdit.id,
        user: userRepository.data.id,
        title: data.title,
      };

      await Api.put('/tags/'.concat(props?.dataEdit.id), newData, config).then(
        (res) => {
          const tag = res.data as Response;

          updateListTag({
            id: props?.dataEdit.id,
            title: tag.title,
            subList: props?.dataEdit.subList,
          });
        props?.handlerClose();
        },
        (err) => {
          if (err.request) {
            console.log(`Error request: ${err.request}`);
          } else {
            console.log(`Error :${err}`);
          }
        },
      );
    } else {
      const newData = { user: userRepository.data.id, title: data.title };

      await Api.post('/tags', newData, config).then(
        (res) => {
          const tag = res.data as Response;
          registerItem({
          id: tag._id, // eslint-disable-line
            title: tag.title,
            subList: [],
          });
        props?.handlerClose();
        },
      );
    }
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
                  value={props?.dataEdit.id ? props?.dataEdit.title : ''}
                  placeholder="Tag"
                  icon={IconTag}
                />
                <Button type="submit" text={props?.dataEdit.id ? 'Alterar' : 'Criar'} />
              </Form>
            </Content>
          </Panel>
        </MainBlock>
      </Container>
    </>
  );
};

export default Tag;
