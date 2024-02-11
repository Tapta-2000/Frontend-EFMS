
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate{
adpermit:boolean=false;
  myvar(adbooll:boolean)
  {
    this.adpermit=adbooll;

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.adpermit;
    
  }

  constructor() { }
}
