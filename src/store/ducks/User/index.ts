import { Reducer } from 'redux';

import { UserState, UserTypes, User } from './types';

const INITIAL_STATE: UserState = {
  data: {} as User,
  loading: false,
  error: [],
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UserTypes.LOAD_SUCCESS:
      return {
        ...state, loading: true, error: [], data: action.payload.data,
      };
    case UserTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
