import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../store';
import { UserState } from '../../../store/ducks/User/types';
import Header from '../../../components/header';
import { ButtonAdd as Button, FormTag, FormOrigin } from '../../../components/form';
import { EditCircle, TrashCircle } from '../../../assets';
import {
  Container, MainBlock, Nav, Title, NavContent,
  List, ItemList, ItemTitle, ItemIcons, Content,
} from './styles';

const Finances: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [formTag, setFormTag] = useState<boolean>(false);
  const [formOrigin, setFormOrigin] = useState<boolean>(false);
  const userRepository: UserState = (
    useSelector<AplicationState>((state) => state.user) as UserState);

  const CreateNewTag = () => (
    <FormTag handlerClose={() => setFormTag(!formTag)} />
  );

  const CreateNewOrigin = () => (
    <FormOrigin handlerClose={() => setFormOrigin(!formOrigin)} />
  );

  return (
    <>
      { !userRepository.data.token && <Redirect to="/login" />}
      { formTag && <CreateNewTag /> }
      { formOrigin && <CreateNewOrigin /> }
      <Header handlerMenu={() => setMenuActive(!menuActive)} />
      <Container>
        <MainBlock>
          <Nav>
            <Title>Categorias</Title>
            <NavContent>
              <List>
                <ItemList>
                  <ItemTitle>Todos os itens</ItemTitle>
                  <ItemIcons>
                    <EditCircle />
                    <TrashCircle />
                  </ItemIcons>
                </ItemList>
              </List>
              <Button type="button" text="Tag" handleClick={() => setFormTag(!formTag)} />
              <Button type="button" text="Origem" handleClick={() => setFormOrigin(!formOrigin)} />
            </NavContent>
          </Nav>
          <Content menuActive={menuActive}>
            <span>Conteudo Finanças</span>
          </Content>
        </MainBlock>
      </Container>
    </>
  );
};

export default Finances;
