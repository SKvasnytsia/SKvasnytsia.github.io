//var provider = new firebase.auth.GoogleAuthProvider();
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
    authenticated: Observable<boolean>;
    uid: Observable<string>;

  constructor(public afAuth: AngularFire) {
    this.authenticated = afAuth.auth.map(user => !!user);
    this.uid = afAuth.auth.map(user => user.uid);
  }

  isLoggedIn() {
    return this.authenticated
  }

  signIn(provider): firebase.Promise<any> {
      const config: any = {
            provider,
            method: AuthMethods.Popup
        }
        return this.afAuth.auth.login(config)
        .then(result => {
          let token = result.auth.getToken()
          let user = result.uid
          console.log('logged in', result)
        })
        .catch(error => console.error('AuthService#signIn() :', error));
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.signIn(AuthProviders.Facebook);
  }

  signOut(): void {
    this.afAuth.auth.logout()
  }
}