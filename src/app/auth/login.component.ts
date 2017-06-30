import { Component, Injectable, ViewEncapsulation } from '@angular/core'

import { AuthService, TranslationService } from '../services/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class AuthComponent {
    private key = 'login'
    public login: Object

    constructor(public auth: AuthService, public translationService: TranslationService) {
        this.login = translationService.getAllForComponent(this.key)
    }

    signInWithGoogle(){
        let result = this.auth.signInWithGoogle()
    }

    signInWithFacebook() {
        let result = this.auth.signInWithFacebook()
    }

    signOut() {
        this.auth.signOut()
    }

}