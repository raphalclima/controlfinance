import React, { useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../store';
import { UserState } from '../../../store/ducks/User/types';
import { TagContext, OriginContext, ListContext } from '../../../components/form/context';
import Api from '../../../services/api';
import Header from '../../../components/header';
import {
  ButtonAdd as Button, List, FormTag, FormOrigin,
} from '../../../components/form';
import {
  Container, MainBlock, Nav, Title, NavContent, Content,
} from './styles';


interface Origin {
  id: string;
  tag?: string;
  title:string;
}

interface Tag {
  id: string;
  title: string;
  subList: Origin[];
}

const Finances: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [formTag, setFormTag] = useState<boolean>(false);
  const [formOrigin, setFormOrigin] = useState<boolean>(false);
  const [listTag, setListTag] = useState<Tag[]>([]);
  const [editTag, setEditTag] = useState<Tag>({} as Tag);
  const [editOrigin, setEditOrigin] = useState<Origin>({} as Origin);

  const userRepository: UserState = (
    useSelector<AplicationState>((state) => state.user) as UserState);

  useEffect(() => {
    async function getTags() {
      const config = {
        headers: { Authorization: 'Bearer '.concat(userRepository.data.token) },
      };

      await Api.get('/tags/'.concat(userRepository.data.id), config).then((res) => {
        setListTag(res.data);
      },
      (err) => {
        if (err.request) {
          console.log(`Error request: ${err.request}`);
        } else {
          console.log(`Error :${err}`);
        }
      });
    }

    getTags();
  }, [userRepository.data.id, userRepository.data.token]);

  listTag.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    return titleA > titleB ? 1 : -1;
  });

  listTag.forEach((item) => {
    if (item.subList) {
      item.subList.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        return titleA > titleB ? 1 : -1;
      });
    }
  });

  const registerItem = useCallback((item: Tag) => {
    setListTag((oldListTag) => ([...oldListTag, item]));
  }, []);

  const updateListTag = useCallback((newTag: Tag) => {
    const tags: Tag[] = listTag.filter((item) => item.id !== newTag.id);
    const newListTag = [...tags, newTag];

    setListTag(newListTag);
  }, [listTag]);

  const removeItem = useCallback((id: string) => {
    const tag = listTag.find((item) => item.id === id);
    const origin = listTag.find((item) => (
      item.subList.find((subItem) => subItem.id === id)
    ))?.subList.find((obj) => obj.id === id);

    async function remove() {
      const config = {
        headers: { Authorization: 'Bearer '.concat(userRepository.data.token) },
      };

      if (tag) {
        await Api.delete('/tags/'.concat(id), config).then((res) => {
          const newListTag = listTag.filter((item) => item.id !== id);
          setListTag(newListTag);
        },
        (err) => {
          if (err.request) {
            console.log(`Error request: ${err.request}`);
          } else {
            console.log(`Error :${err}`);
          }
        });
      } else if (origin) {
        await Api.delete('/origins/'.concat(id), config).then((res) => {
          const newTag = listTag.find((item) => item.subList.find((subItem) => subItem.id === id));
          const newListOrigins = newTag?.subList.filter((item) => item.id !== id);

          const newList = listTag.filter((item) => !(
            item.subList.find((subItem) => subItem.id === id)
          ));

          setListTag([...newList, {
            id: newTag?.id,
            title: newTag?.title,
            subList: newListOrigins,
          } as Tag]);
        },
        (err) => {
          if (err.request) {
            console.log(`Error request: ${err.request}`);
          } else {
            console.log(`Error :${err}`);
          }
        });
      }
    }

    remove();
  }, [listTag, userRepository.data.token]);

  const editItem = useCallback((id: string) => {
    const tag = listTag.find((item) => item.id === id);
    const origin = listTag.find((item) => (
      item.subList.find((subItem) => subItem.id === id)
    ))?.subList.find((obj) => obj.id === id);

    if (tag) {
      setEditTag(tag);
      setFormTag(!formTag);
    } else if (origin) {
      const idTag = listTag.find((item) => (
        item.subList.find((subItem) => subItem.id === id)
      ))?.id;

      setEditOrigin({ ...origin, tag: idTag });
      setFormOrigin(!formOrigin);
    }
  }, [formOrigin, formTag, listTag]);

  const CreateNewTag = () => (
    <TagContext.Provider value={{ registerItem, updateListTag }}>
      <FormTag
        dataEdit={editTag}
        handlerClose={() => {
          setFormTag(!formTag);
          setEditTag({} as Tag);
        }}
      />
    </TagContext.Provider>
  );

  const CreateNewOrigin = () => (
    <OriginContext.Provider value={{ updateListTag }}>
      <FormOrigin
        dataEdit={editOrigin}
        dataListTags={listTag}
        handlerClose={() => {
          setFormOrigin(!formOrigin);
          setEditOrigin({} as Origin);
        }}
      />
    </OriginContext.Provider>
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
              <ListContext.Provider value={{ editItem, removeItem }}>
                <List data={listTag} />
              </ListContext.Provider>
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
