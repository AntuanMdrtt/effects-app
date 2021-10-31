import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { UserService } from '../../services/user.service';
import * as usersActions from "../actions";

@Injectable()
export class UsersEffects {

  constructor(
    private readonly _actions$: Actions,
    private readonly _usersService: UserService,
  ) { }

  loadUsers$ = createEffect(
    () => this._actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() => this._usersService.getUsers()
        .pipe(
          map(users => usersActions.successLoadedUsers({ users })),
          catchError(err => of(usersActions.errorLoadedUsers({ payload: err })))
        ))
    )
  );
}