import { createContext } from 'react';

interface ListEvents {
  editItem(id: string): void;
  removeItem(id: string): void;
}

const CardFinanceContext = createContext<ListEvents>({} as ListEvents);

export default CardFinanceContext;
