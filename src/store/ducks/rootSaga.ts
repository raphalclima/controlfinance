import { all, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux';

import { UserTypes } from './User/types';
import { load } from './User/saga';

interface Login {
  username: string;
  password: string;
}

interface Signup {
  nickname: string;
  email: string;
  username:string;
  password: string;
}

interface ResetPassword {
  password: string;
  passwordResetToken: string;
}

interface Params extends Action {
  routeUrl: string;
  routeData: Login | Signup | ResetPassword;
}

export default function* rootSaga() {
  return yield all([
    takeLatest<Params>(UserTypes.LOAD_REQUEST, load),
  ]);
}
