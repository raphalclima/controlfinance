import React, { useRef, useState, useContext } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../../store';
import { UserState } from '../../../../store/ducks/User/types';
import { FinanceContext } from '../../context';
import Button from '../../elements/button';
import Input from '../../elements/input';
import Dropdown from '../../elements/dropdown';

import {
  CloseCircle, Calender, Truck, Tag as TagIcon, BagMoney,
} from '../../../../assets';

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
  date: Date;
  value: number;
  tag: string;
  origin: string;
  type: number;
}

interface FinanceInterface {
  id: string;
  date: Date;
  value: number;
  tag: string;
  origin: string;
  type: number;
}

interface ResponseError {
  field: string;
  error: string;
}

interface Props {
  handlerClose(): void;
  dataListTags: TagInterface[];
  dataEdit: FinanceInterface;
}

const Finance: React.FC<Props> = (props) => {
  const formRef = useRef<FormHandles>(null);
  const { registerFinance, updateListFinance } = useContext(FinanceContext);
  const [tagSelect, setTagSelect] = useState<string>('');
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
        date: data.date,
        type: data.type,
        value: data.value,
        tag: data.tag,
        origin: data.origin,
      };

      await Api.put('/finances/'.concat(props?.dataEdit.id), newData, config).then((res) => {
        const finance = res.data as FinanceInterface;

        updateListFinance({
          id: props?.dataEdit.id,
          date: finance.date,
          type: finance.type,
          value: finance.value,
          tag: finance.tag,
          origin: finance.origin,
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
      const newData = {
        user: userRepository.data.id,
        date: data.date,
        type: data.type,
        value: data.value,
        tag: data.tag,
        origin: data.origin,
      };

      await Api.post('/finances', newData, config).then(
        (res) => {
          const finance = res.data as FinanceInterface;
          console.log(finance);
          registerFinance(finance);
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
              <Title>Cadastro de Finança</Title>
              <Form ref={formRef} onSubmit={handleSubimit}>
                <Input
                  type="date"
                  name="date"
                  value={props?.dataEdit.id ? String(props?.dataEdit.date).split('T')[0] : ''}
                  placeholder="Data"
                  icon={Calender}
                />
                <Dropdown
                  name="type"
                  placeholder="Tipo"
                  value={props?.dataEdit.type ? String(props?.dataEdit.type) : undefined}
                  listItens={[
                    {
                      id: '1',
                      title: 'Provento',
                    },
                    {
                      id: '2',
                      title: 'Desconto',
                    },
                  ]}
                  icon={Truck}
                />
                <Input
                  type="text"
                  name="value"
                  value={props?.dataEdit.id ? String(props?.dataEdit.value) : ''}
                  placeholder="Valor"
                  icon={BagMoney}
                />
                <Dropdown
                  name="tag"
                  placeholder="Tag"
                  value={props?.dataEdit.tag}
                  listItens={props?.dataListTags as DropdownInterface[]}
                  icon={TagIcon}
                  handlerChange={(obj: string) => setTagSelect(obj)}
                />
                <Dropdown
                  name="origin"
                  placeholder="Origem"
                  value={props?.dataEdit.origin}
                  listItens={
                    tagSelect || !!props?.dataEdit.origin
                      ? props?.dataListTags.find(
                        (item) => item.title === tagSelect || item.id === props?.dataEdit.tag
                        )?.subList as DropdownInterface[]
                      : [{} as DropdownInterface]
                  }
                  icon={Truck}
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

export default Finance;
