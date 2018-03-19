import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SystemConstants } from '../common/system.constants';
import { URLConstants } from '../common/url.constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(SystemConstants.CURRENT_USER)) {
      return true;
    } else {
      this._router.navigate([URLConstants.LOGIN], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }

  }
}
