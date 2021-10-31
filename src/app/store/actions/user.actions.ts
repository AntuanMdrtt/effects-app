import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const loadUser = createAction(
    '[User Component] loadUser', props<{ user_id: string }>()
);

export const successLoadedUser = createAction(
    '[User Component] successLoadedUser', props<{ user: UserModel }>()
);

export const errorLoadedUser = createAction(
    '[User Component] errorLoadedUser', props<{ payload: any }>()
);
