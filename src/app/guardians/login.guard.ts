import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

//SERVICES
import { AccessService } from "../services/access.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router:Router, private access:AccessService){}

  // redirect(flag:any){
  //   if(!flag)
  //     this.router.navigate(['/','login']);
  // }

  user:any;
  validRoute:boolean=false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.access.send.subscribe(data=>{
      this.user=data;
      this.validRoute=(this.user.user=="estudiante"&&this.user.pass=="cadif1");
    });
    return this.validRoute;
  }

}
