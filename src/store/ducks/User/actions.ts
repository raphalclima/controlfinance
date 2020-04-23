import { action } from 'typesafe-actions';

import { UserTypes, User } from './types';

interface Params {
  username: string;
  password: string;
}

interface Params {
  field: string;
  error: string;
}

export const loadRequest = (params: Params) => action(UserTypes.LOAD_REQUEST, { params });
export const loadSuccess = (data: User[]) => action(UserTypes.LOAD_SUCCESS, { data });
export const loadFailure = (data: Error[]) => action(UserTypes.LOAD_FAILURE, { data });
