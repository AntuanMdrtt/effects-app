import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, errorLoadedUsers, successLoadedUsers } from '../actions';
import { UserModel } from '../../models/user.model';

export interface UsersState {
  users: UserModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _usersReducer = createReducer(usersInitialState,

  on(loadUsers, state => ({ ...state, loading: true })),
  on(successLoadedUsers, (state, { users }) => (
    { ...state, loading: false, loaded: true, users: [...users] }
  )),
  on(errorLoadedUsers, (state, { payload }) => (
    {
      ...state, loading: false, loaded: false, error: {
        url: payload.url, name: payload.name, message: payload.message
      }
    }
  )),
);

export function usersReducer(state = usersInitialState, action: Action) {
  return _usersReducer(state, action);
}