import { action } from 'typesafe-actions';

import { UserTypes, User, Error } from './types';

export const loadRequest = () => action(UserTypes.LOAD_REQUEST);
export const loadSuccess = (data: User) => action(UserTypes.LOAD_SUCCESS, { data });
export const loadFailure = (data: Error[]) => action(UserTypes.LOAD_FAILURE, { data });
