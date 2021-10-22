import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  users: UserModel[] = [];

  constructor(
    private readonly _userService: UserService
  ) { }

  ngOnInit(): void {
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

}
