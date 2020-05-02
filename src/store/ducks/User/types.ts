export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_FAILURE = '@user/LOAD_FAILURE'
}

export interface User {
  id: string;
  email: string;
  username: string;
  nickname: string;
  token: string;
}

export interface Error {
  field: string;
  error: string;
}

export interface UserState{
  readonly data: User;
  readonly loading: boolean;
  readonly error: Error[];
}
