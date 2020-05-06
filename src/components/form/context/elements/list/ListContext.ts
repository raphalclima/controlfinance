import { createContext } from 'react';

interface ListEvents {
  editItem(id: string): void;
  removeItem(id: string): void;
}

const ListContext = createContext<ListEvents>({} as ListEvents);

export default ListContext;
