import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { SystemConstants } from '../../core/common/system.constants';
import { Router } from '@angular/router';
import { URLConstants } from '../../core/common/url.constants';
import { NotificationService } from '../../core/services/notification.service';
import { LoggedInUser } from '../../core/domain/loggedin.user';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  user: LoggedInUser;
  constructor(
    private _authen: AuthService,
    private _router: Router,
    private _notifi: NotificationService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    console.log(localStorage.getItem(SystemConstants.CURRENT_USER));
    console.log(this.user.fullName);
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._router.navigate([URLConstants.LOGIN]);
    this._notifi.printSuccessMessage('Goodbye ' + this.user.fullName + ' !');
  }
}
