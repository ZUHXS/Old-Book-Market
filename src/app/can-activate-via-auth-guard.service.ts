import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {
    constructor(
      private authService: AuthService,
      private notificationsService: NotificationsService,
      public router: Router,
    ) {

    }

    canActivate() {
      if (!this.authService.isAuthenticated) {
        this.notificationsService.warn('请先登录或注册');
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
}
