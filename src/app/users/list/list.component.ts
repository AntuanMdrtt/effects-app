import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  users: UserModel[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private readonly _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(loadUsers());
    this._store.select('users')
      .subscribe(({ users, loading,error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      });
  }

}
