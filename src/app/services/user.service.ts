import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _baseURL: string = 'https://reqres.in/api/';

  constructor(
    private readonly _http: HttpClient
  ) { }


  getUsers(): Observable<any> {
    return this._http.get(`${this._baseURL}users?delay=3`)
      .pipe(map((response: any) => response.data));
  }

  getUser(id: string): Observable<any> {
    return this._http.get(`${this._baseURL}users/${id}`)
    .pipe(map((response: any) => response.data));
  }

}
