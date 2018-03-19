import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { NotificationService } from '../core/services/notification.service';
import { MessageContstants } from '../core/common/message.constants';
import { URLConstants } from '../core/common/url.constants';
import { Router } from '@angular/router';
import { LoggedInUser } from '../core/domain/loggedin.user';
import { SystemConstants } from '../core/common/system.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  entity: any;
  loading: boolean;
  user: LoggedInUser;
  constructor(
    private e: ElementRef,
    private router: Router,
    private _authen: AuthService,
    private _notification: NotificationService
  ) { }

  ngOnInit() {
    this.entity = {};
    this.loading = false;
    const loginJS = document.createElement('script');
    loginJS.type = 'text/javascript';
    loginJS.src = '../assets/js/sign-in.js';
    this.e.nativeElement.appendChild(loginJS);
  }
  login() {
    this.loading = true;
    this._authen.login(this.entity.username, this.entity.password).subscribe(data => {
      this.router.navigate([URLConstants.HOME]);
      this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      this._notification.printSuccessMessage('Welcome ' + this.user.fullName + ' !');
    }, error => {
      this._notification.printErrorMessage(MessageContstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    });
  }

}
