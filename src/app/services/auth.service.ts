import { Injectable } from '@angular/core'
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth'
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    authenticated: boolean
    private _uid: Observable<string> = Observable.of('')

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.authenticated = !!user
      const result = user ? user.uid : null
      this.uid = Observable.of(result)
    })
  }
  set uid(value) {
    this._uid = value
  }
  get uid() {
    return this._uid
  }

  isLoggedIn() {
    return this.authenticated
  }

  signIn(provider): firebase.Promise<any> {
        return this.afAuth.auth.signInWithPopup(provider)
        .then(result => {
          let token = result.credential.accessToken
          let user = result.uid
        })
        .catch(error => console.error('AuthService#signIn() :', error));
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut()
  }
}