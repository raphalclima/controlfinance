import React, { useState, useContext } from 'react';

import { ListContext } from '../../context';
import {
  EditCircle, TrashCircle, Expand, Contract,
} from '../../../../assets';
import {
  List, SubList, Item, ItemSubList, ItemContent, Title, ItemIcons, SubItemContent,
  SubItemTitle, SubItemIcons,
} from './styles';

interface SubListInterface {
  id: string;
  title: string;
}

interface ListInterface {
  id: string;
  title: string;
  subList: SubListInterface[];
}

interface Props {
  data: ListInterface[];
}

const ListComponent: React.FC<Props> = (props) => {
  const [ItensActive, setItensActive] = useState<string[]>(['']);
  const { removeItem, editItem, setFilterCard } = useContext(ListContext);

  return (
    <List>
      <Item key={1}>
        <ItemContent onClick={() => setFilterCard('')}>
          <Title>Todos os itens</Title>
        </ItemContent>
      </Item>
      {props?.data.map((item: ListInterface) => (
        <React.Fragment key={item.id}>
          <Item key={item.id}>
            <ItemContent onClick={() => {
              setFilterCard(item.id);

              !ItensActive.find((obj) => obj === item.id)
                ? setItensActive((oldItems) => ([...oldItems, item.id]))
                : setItensActive(ItensActive.filter((obj) => obj !== item.id));
            }}
            >
              { item.subList.length > 0
                && !ItensActive.includes(item.id)
                && (
                <Expand
                  position={false}
                  mini
                  handlerClick={() => {
                    setItensActive((oldItems) => ([...oldItems, item.id]));
                  }}
                />
                )}
              { item.subList.length > 0
                && ItensActive.includes(item.id)
                && (
                <Contract
                  position={false}
                  mini
                  handlerClick={() => {
                    const newItensActive = ItensActive.filter((obj) => obj !== item.id);
                    setItensActive(newItensActive);
                  }}
                />
                )}
              <Title hasSubItem={item.subList.length > 0}>{item.title}</Title>
            </ItemContent>
            <ItemIcons>
              <EditCircle activeList handlerClick={() => editItem(item.id)} />
              <TrashCircle activeList handlerClick={() => removeItem(item.id)} />
            </ItemIcons>
          </Item>
          { item.subList.map((subItem: SubListInterface) => (
            <React.Fragment key={subItem.id}>
              <SubList activeList={ItensActive.includes(item.id)}>
                <ItemSubList
                  key={subItem.id}
                  activeList={ItensActive.includes(item.id)}
                >
                  <SubItemContent
                    onClick={() => setFilterCard(subItem.id)}
                    activeList={ItensActive.includes(item.id)}
                  >
                    <SubItemTitle
                      hasSubItem={false}
                      activeList={ItensActive.includes(item.id)}
                    >
                      {subItem.title}
                    </SubItemTitle>
                  </SubItemContent>
                  <SubItemIcons activeList={ItensActive.includes(item.id)}>
                    <EditCircle
                      activeList={ItensActive.includes(item.id)}
                      handlerClick={() => editItem(subItem.id)}
                    />
                    <TrashCircle
                      activeList={ItensActive.includes(item.id)}
                      handlerClick={() => removeItem(subItem.id)}
                    />
                  </SubItemIcons>
                </ItemSubList>
              </SubList>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ListComponent;
