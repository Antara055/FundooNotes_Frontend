import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthgaurdService } from './services/authgaurdService/authgaurd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthgaurdService, private router: Router) {}

  canActivate():boolean{
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/sign-in");  
  }  
  return this.Authguardservice.gettoken();
  /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */
  
}
}
