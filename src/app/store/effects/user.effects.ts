import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { UserService } from '../../services/user.service';
import * as userActions from "../actions";

@Injectable()
export class UserEffects {

  constructor(
    private readonly _actions$: Actions,
    private readonly _usersService: UserService,
  ) { }

  loadUser$ = createEffect(
    () => this._actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap((action) => this._usersService.getUser(action.user_id)
        .pipe(
          map(user => userActions.successLoadedUser({ user })),
          catchError(err => of(userActions.errorLoadedUser({ payload: err })))
        ))
    )
  );
}