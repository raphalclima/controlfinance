import React, { useState, useContext } from 'react';

import { ListContext } from '../../context';
import {
  EditCircle, TrashCircle, Expand, Contract,
} from '../../../../assets';
import {
  List, SubList, Item, ItemContent, Title, ItemIcons,
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
  const { removeItem, editItem } = useContext(ListContext);

  return (
    <List>
      <Item key={1}>
        <ItemContent>
          <Title>Todos os itens</Title>
        </ItemContent>
      </Item>
      {props?.data.map((item: ListInterface) => (
        <React.Fragment key={item.id}>
          <Item key={item.id}>
            <ItemContent>
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
              <EditCircle handlerClick={() => editItem(item.id)} />
              <TrashCircle handlerClick={() => removeItem(item.id)} />
            </ItemIcons>
          </Item>
          { item.subList.map((subItem: SubListInterface) => (
            <React.Fragment key={subItem.id}>
              <SubList activeList={ItensActive.includes(item.id)}>
                <Item key={subItem.id}>
                  <ItemContent>
                    <Title hasSubItem={false}>{subItem.title}</Title>
                  </ItemContent>
                  <ItemIcons>
                    <EditCircle handlerClick={() => editItem(subItem.id)} />
                    <TrashCircle handlerClick={() => removeItem(subItem.id)} />
                  </ItemIcons>
                </Item>
              </SubList>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ListComponent;
