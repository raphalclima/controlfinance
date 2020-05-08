import { createContext } from 'react';

interface ListFinance {
  id: string;
  date: Date;
  type: number;
  value: number;
  tag: string;
  origin: string;
}

interface Finance {
  registerFinance(tag: ListFinance): void;
  updateListFinance(tag: ListFinance): void;
}

const FinanceContext = createContext<Finance>({} as Finance);

export default FinanceContext;
