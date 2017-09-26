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

  signInWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      let token = result.credential.accessToken
      let user = result.uid
    })
    .catch(error => {
      console.error('AuthService#signInWithEmailAndPassword() :', error)
      return error
    });
  }

  signUpWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      let token = result.credential.accessToken
      let user = result.uid
    })
    .catch(error => console.error('AuthService#signUpWithEmailAndPassword() :', error));

  }

  signInAnonymously() {
    return  this.afAuth.auth.signInAnonymously()
    .catch(error => console.error('AuthService#signInAnonymously() :', error));
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