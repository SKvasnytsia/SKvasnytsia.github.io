//var provider = new firebase.auth.GoogleAuthProvider();
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, AuthConfiguration } from 'angularfire2';
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

  signIn(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
      const config: firebase.AuthConfiguration = {
            provider,
            method: AuthMethods.Popup
        }
        return this.afAuth.auth.login(config)
        .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.logout()
  }
}