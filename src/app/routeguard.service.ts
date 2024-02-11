import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private route:Router){}
permit:boolean=false;
  myvar(booll:boolean)
  {
    this.permit=booll;

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
  
    return this.permit;
    
  }

  
}
