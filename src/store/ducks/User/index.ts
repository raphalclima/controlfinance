import { Reducer } from 'redux';

import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true, data: action.payload };
    case UserTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload,
      };
    case UserTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
