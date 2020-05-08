import React, { useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Api from '../../../services/api';
import Header from '../../../components/header';
import { AplicationState } from '../../../store';
import { UserState } from '../../../store/ducks/User/types';
import {
  ListContext, TagContext, OriginContext, FinanceContext, CardFinanceContext,
} from '../../../components/form/context';

import { CardFinance, CardFinanceAdd } from '../../../components/card';

import {
  ButtonAdd as Button, List, FormTag, FormOrigin, FormFinance,
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

enum Type {
  Provento,
  Desconto
}

interface Finance {
  id: string;
  date: Date;
  type: number;
  value: number;
  tag: string;
  origin: string;
}

const Finances: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [formTag, setFormTag] = useState<boolean>(false);
  const [formOrigin, setFormOrigin] = useState<boolean>(false);
  const [formFinance, setFormFinance] = useState<boolean>(false);
  const [listTag, setListTag] = useState<Tag[]>([]);
  const [listFinance, setListFinance] = useState<Finance[]>([]);
  const [editTag, setEditTag] = useState<Tag>({} as Tag);
  const [editOrigin, setEditOrigin] = useState<Origin>({} as Origin);
  const [editFinance, setEditFinance] = useState<Finance>({} as Finance);
  const [filterCard, setFilterCard] = useState<string>('');

  const cards = filterCard
    ? listFinance.filter((item) => item.tag === filterCard || item.origin === filterCard)
    : listFinance;

  const userRepository: UserState = (
    useSelector<AplicationState>((state) => state.user) as UserState);

  useEffect(() => {
    async function loadPage() {
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

      await Api.get('/finances/'.concat(userRepository.data.id), config).then((res) => {
        setListFinance(res.data);
      },
      (err) => {
        if (err.request) {
          console.log(`Error request: ${err.request}`);
        } else {
          console.log(`Error :${err}`);
        }
      });
    }

    loadPage();
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

  // Register, Update, Edit Item of Tags and Origins

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
    const finance = listFinance.find((item) => item.id === id);

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
      } else if (finance) {
        await Api.delete('/finances/'.concat(id), config).then((res) => {
          const newListFinance = listFinance.filter((item) => item.id !== id);
          setListFinance(newListFinance);
        },
        (err) => {
          if (err.request) {
            console.log(`Error request: ${err.request}`);
          } if (err.response) {
            console.log(`Error response: ${err.response.data}`);
          } else {
            console.log(`Error :${err}`);
          }
        });
      }
    }

    remove();
  }, [listFinance, listTag, userRepository.data.token]);

  const editItem = useCallback((id: string) => {
    const tag = listTag.find((item) => item.id === id);

    if (tag) {
      setEditTag(tag);
      setFormTag(!formTag);
    } else {
      const origin = listTag.find((item) => (
        item.subList.find((subItem) => subItem.id === id)
      ))?.subList.find((obj) => obj.id === id);

      if (origin) {
        const idTag = listTag.find((item) => (
          item.subList.find((subItem) => subItem.id === id)
        ))?.id;

        setEditOrigin({ ...origin, tag: idTag });
        setFormOrigin(!formOrigin);
      } else {
        const finance = listFinance.find((item) => item.id === id);

        if (finance) {
          setEditFinance(finance);
          setFormFinance(!formFinance);
        }
      }
    }
  }, [formFinance, formOrigin, formTag, listFinance, listTag]);

  // Register, Update, Edit Item of Finances

  const registerFinance = useCallback((item: Finance) => {
    setListFinance((oldListFinance) => ([...oldListFinance, item]));
  }, []);

  const updateListFinance = useCallback((newFinance: Finance) => {
    const finances: Finance[] = listFinance.filter((item) => item.id !== newFinance.id);
    const newListFinance = [...finances, newFinance];

    setListFinance(newListFinance);
  }, [listFinance]);

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

  const CreateNewFinance = () => (
    <FinanceContext.Provider value={{ registerFinance, updateListFinance }}>
      <FormFinance
        dataListTags={listTag}
        dataEdit={editFinance}
        handlerClose={() => {
          setFormFinance(!formFinance);
          setEditFinance({} as Finance);
        }}
      />
    </FinanceContext.Provider>
  );

  return (
    <>
      { !userRepository.data.token && <Redirect to="/login" />}
      { formTag && <CreateNewTag /> }
      { formOrigin && <CreateNewOrigin /> }
      { formFinance && <CreateNewFinance />}
      <Header handlerMenu={() => setMenuActive(!menuActive)} />
      <Container>
        <MainBlock>
          <Nav>
            <Title>Categorias</Title>
            <NavContent>
              <ListContext.Provider value={{ editItem, removeItem, setFilterCard }}>
                <List data={listTag} />
              </ListContext.Provider>
              <Button type="button" text="Tag" handleClick={() => setFormTag(!formTag)} />
              <Button type="button" text="Origem" handleClick={() => setFormOrigin(!formOrigin)} />
            </NavContent>
          </Nav>
          <Content menuActive={menuActive}>
            { cards.map((item) => (
              <CardFinanceContext.Provider value={{ editItem, removeItem }}>
                <CardFinance
                  id={item.id}
                  qtdCard={4}
                  type={item.type === 1 ? Type.Provento : Type.Desconto}
                  value={item.value}
                  tag={listTag.find((tag) => tag.id === item.tag)?.title as string}
                  origin={listTag.find(
                    (tag) => tag.id === item.tag,
                  )?.subList.find((origin) => origin.id === item.origin)?.title as string}
                />
              </CardFinanceContext.Provider>
            )) }
            <CardFinanceAdd
              handleClick={() => setFormFinance(!formFinance)}
              qtdCard={4}
            />
          </Content>
        </MainBlock>
      </Container>
    </>
  );
};

export default Finances;
