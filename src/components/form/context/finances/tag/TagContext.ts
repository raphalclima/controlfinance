import { createContext } from 'react';

interface ListOrigin {
  id: string;
  title:string;
}

interface ListTag {
  id: string;
  title: string;
  subList: ListOrigin[];
}

interface Tag {
  registerItem(tag: ListTag): void;
  updateListTag(tag: ListTag): void;
}

const TagContext = createContext<Tag>({} as Tag);

export default TagContext;
