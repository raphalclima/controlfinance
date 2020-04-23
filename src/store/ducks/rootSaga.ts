import { all, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux';

import { UserTypes } from './User/types';
import { load } from './User/saga';

interface Params extends Action {
  username: string;
  password: string;
}

export default function* rootSaga() {
  return yield all([
    takeLatest<Params>(UserTypes.LOAD_REQUEST, load),
  ]);
}
