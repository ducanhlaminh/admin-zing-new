import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { UserService } from '../modules/news/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class CheckRoleGuard implements CanActivate {
  user: any;
  constructor(private UserService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');
    const role_id = localStorage.getItem('role_id');
    if (!token) {
      this.router.navigateByUrl('http://localhost:4200/login');
    }
    return (token && role_id === '1') || (token && role_id === '2')
      ? true
      : false;
  }
}
