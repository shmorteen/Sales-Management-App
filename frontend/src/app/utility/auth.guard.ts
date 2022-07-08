import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private httpService: HttpService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem('token')){
            return true;
        }
        
        this.router.navigate(['/auth']);
        return false;
    }

}
