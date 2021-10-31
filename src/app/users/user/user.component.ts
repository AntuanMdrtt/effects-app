import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../../services/user.service';
import { AppState } from '../../store/app.reducers';
import { loadUser } from '../../store/actions/user.actions';
import { UserModel } from '../../models/user.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  user!: UserModel;

  constructor(
    private readonly _router: ActivatedRoute,
    private readonly _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._router.params.subscribe(({ id }) => {
      console.log(id);

      this._store.dispatch(loadUser({ user_id: id }));

      // this._userService.getUser(id)
      //   .subscribe(console.log);

    });

    this._store.select('user')
      .pipe(filter(({ user }) => user !== null))
      .subscribe(({ user }) => {
        console.log(user);
        this.user = user!;
      });
  }

}
