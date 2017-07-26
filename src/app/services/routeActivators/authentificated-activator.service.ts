import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'


@Injectable()
export class AuthentificatedActivator implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {
    }

    canActivate(): Observable<boolean> {
        let authenticatedSubject = this.auth.authState
            .take(1)
            .map(user => !!user)
            .do(authentificated => {
                if (!authentificated)
                    this.router.navigate([ '/login' ])
            })
        return authenticatedSubject
    }
}