import { Injectable } from '@angular/core'
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth'
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    authenticated: boolean
    uid: string

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.authenticated = !!user

      this.uid = user ? user.uid : null
    })
  }

  isLoggedIn() {
    return this.authenticated
  }

  signIn(provider): firebase.Promise<any> {
        return this.afAuth.auth.signInWithPopup(provider)
        .then(result => {
          let token = result.credential.accessToken
          let user = result.uid
          console.log('logged in', result)
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