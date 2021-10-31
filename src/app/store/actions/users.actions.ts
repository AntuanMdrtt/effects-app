import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const loadUsers = createAction('[Users Component] loadUsers');

export const successLoadedUsers = createAction(
  '[Users Component] successLoadedUsers', props<{ users: UserModel[] }>()
);

export const errorLoadedUsers = createAction(
  '[Users Component] errorLoadedUsers', props<{ payload: any }>()
);
