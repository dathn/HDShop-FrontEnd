import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SystemConstants } from '../common/system.constants';
import { LoggedInUser } from '../domain/loggedin.user';
@Injectable()
export class AuthService {

  constructor(
    private _htpp: Http
  ) { }
  login(username: string, password: string) {
    const body = 'userName=' + encodeURIComponent(username)
      + '&password=' + encodeURIComponent(password)
      + '&grant_type=password';
      const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const option = new RequestOptions({ headers: header });
    return this._htpp.post(SystemConstants.BASE_API + '/oath/token', body, option)
      .map((response: Response) => {
        const user: LoggedInUser = response.json();
        if (user && user.access_token) {
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
        }
      });
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }
  isUserAuthenticated(): boolean {
    const user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user !== null) {
      return true;
    } else {
      return false;
    }
  }
  getLoggedInUser(): LoggedInUser {
    let user: LoggedInUser;
    if (this.isUserAuthenticated()) {
      const userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token, userData.username, userData.fullName, userData.email, userData.avatar);
    } else {
      user = null;
    }
    return user;
  }
}
