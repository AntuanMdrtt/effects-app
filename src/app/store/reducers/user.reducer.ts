import { Action, createReducer, on } from '@ngrx/store';
import { loadUser, errorLoadedUser, successLoadedUser } from '../actions';
import { UserModel } from '../../models/user.model';

export interface userState {
  user_id: string;
  user: UserModel | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: userState = {
  user_id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null
}

const _userReducer = createReducer(userInitialState,

  on(loadUser, (state, { user_id }) => ({ ...state, loading: true, user_id })),
  on(successLoadedUser, (state, { user }) => (
    { ...state, loading: false, loaded: true, user: { ...user } }
  )),
  on(errorLoadedUser, (state, { payload }) => (
    {
      ...state, loading: false, loaded: false, error: {
        url: payload.url, name: payload.name, message: payload.message
      }
    }
  )),
);

export function userReducer(state = userInitialState, action: Action) {
  return _userReducer(state, action);
}