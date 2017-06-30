import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../index' 

@Injectable()
export class AuthentificatedActivator implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {
    }

    canActivate(): boolean {
        console.log(this.auth) 
        return true
        //todo: change to Observable
        // let authenticatedPromise = this.auth.map(user => !!user).toPromise()
        // authenticatedPromise.then(authenticated => {
        //     if (!authenticated) 
        //         this.router.navigate([ '/login' ]);
        //     return authenticated
        // })
        // return authenticatedPromise
    }
}