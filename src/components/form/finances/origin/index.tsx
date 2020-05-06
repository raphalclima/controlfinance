import React, { useRef, useContext } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../../store';
import { UserState } from '../../../../store/ducks/User/types';
import { OriginContext } from '../../context';
import Button from '../../elements/button';
import Input from '../../elements/input';
import Dropdown from '../../elements/dropdown';

import { CloseCircle, Truck, Tag as TagIcon } from '../../../../assets';

import {
  Block, Container, MainBlock, Panel, Content, Title, Form,
} from './styles';

import Api from '../../../../services/api';

interface OriginInterface {
  id: string;
  tag?: string;
  title: string;
}

interface TagInterface {
  id: string;
  title: string;
  subList: OriginInterface[];
}

interface DropdownInterface {
  id: string;
  title: string;
}

interface FormData {
  tag: string;
  title: string;
}

interface Response {
  _id: string;
  title: string;
}

interface ResponseError {
  field: string;
  error: string;
}

interface Props {
  handlerClose(): void;
  dataListTags: TagInterface[];
  dataEdit: OriginInterface;
}

const Origin: React.FC<Props> = (props) => {
  const formRef = useRef<FormHandles>(null);
  const { updateListTag } = useContext(OriginContext);
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
        tag: data.tag,
        title: data.title,
      };

      await Api.put('/origins/'.concat(props?.dataEdit.id), newData, config).then((res) => {
        const origin = res.data as Response;
        const tag = (props?.dataListTags.find((item) => item.id === data.tag) as TagInterface);
        const originItens = tag.subList.filter((item) => item.id !== origin._id); // eslint-disable-line

        updateListTag({
          id: props?.dataEdit.tag as string,
          title: tag.title,
          subList: [...originItens, {
            id: origin._id, // eslint-disable-line
            title: origin.title,
          }],
        });

      props?.handlerClose();
      },
      (err) => {
        if (err.request) {
          console.log(`Error request: ${err.request}`);
        } else {
          console.log(`Error :${err}`);
        }
      });
    } else {
      const newData = { user: userRepository.data.id, tag: data.tag, title: data.title };

      await Api.post('/origins', newData, config).then(
        (res) => {
          const origin = res.data as Response;
          const tag = (props?.dataListTags.find((item) => item.id === data.tag) as TagInterface);

          updateListTag({
            id: tag.id,
            title: tag.title,
            subList: [...tag.subList, {
              id: origin._id, // eslint-disable-line
              title: origin.title,
            }],
          });

        props?.handlerClose();
        },
        (err) => {
          if (err.response) {
            (err.response.data.error as ResponseError[]).map((item) => (
              formRef.current?.setFieldError(item.field, item.error)
            ));
          }
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
              <Title>Cadastro de Origem</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="text"
                  name="title"
                  value={props?.dataEdit.id ? props?.dataEdit.title : ''}
                  placeholder="Origem"
                  icon={Truck}
                />
                <Dropdown
                  name="tag"
                  value={props?.dataEdit.tag}
                  listItens={props?.dataListTags as DropdownInterface[]}
                  icon={TagIcon}
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

export default Origin;
