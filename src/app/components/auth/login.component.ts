import { Component, Injectable, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthService, TranslationService } from '../../services/index'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})

export class AuthComponent {
    private key = 'login'
    public login: any
    public error: string
    public loginData = {
        email: '',
        password: ''
    }

    constructor(public router: Router, public auth: AuthService, public translationService: TranslationService, private firebaseAuth: AngularFireAuth) {
        this.login = translationService.getAllForComponent(this.key)
        this.firebaseAuth.authState.subscribe(user => {
            if (user)
                this.router.navigateByUrl('/categories')
        })
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

    signInWithEmailAndPassword() {
        this.error = 'Attempting to sign in'
        this.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
        .then(data => {
            this.error = ''
        })
        .catch(e => {
            console.log(e)
            this.error = e.message
        })
    }

    signInAnonymously() {
        this.auth.signInAnonymously()
    }

}