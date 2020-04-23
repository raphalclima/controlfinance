export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_FAILURE = '@user/LOAD_FAILURE'
}

export interface User {
  id: string;
  email: string;
  username: string;
  token: string;
}

export interface UserState{
  readonly data: User[];
  readonly loading: boolean;
  readonly error: boolean;
}
