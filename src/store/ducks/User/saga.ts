import { call, put } from 'redux-saga/effects';
import { Action } from 'redux';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

interface Params extends Action {
  username: string;
  password: string;
}

export function* load(params: Params) {
  try {
    const { username, password } = params;
    console.log('chamando api');
    console.log(params);
    const response = yield call(api.post, '/users/authenticate', { username, password });
    console.log(response);
    console.log('foi sucesso');
    yield put(loadSuccess(response.data));
    console.log('foi sucesso');
  } catch (err) {
    console.log('erro');
    console.log(err.response);
    yield put(loadFailure(err.response.data));
  }
}
