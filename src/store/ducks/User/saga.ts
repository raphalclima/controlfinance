import { call, put } from 'redux-saga/effects';
import { Action } from 'redux';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';


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

export function* load(params: Params) {
  try {
    const { routeUrl, routeData } = params;
    const response = yield call(api.post, routeUrl, routeData);
    const user = {
      id: response.data.user._id, // eslint-disable-line
      email: response.data.user.email,
      username: response.data.user.username,
      nickname: response.data.user.nickname,
      token: response.data.token,
    };

    yield put(loadSuccess(user));
  } catch (err) {
    yield put(loadFailure(err.response.data));
  }
}
