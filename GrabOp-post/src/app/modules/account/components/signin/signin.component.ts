import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { SOAuthenticateResponse } from '../../../../models/sos';
// import {LoginService} from '../login.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { VOUser } from '../../models/vouser';
import { AuthHttpMy } from '../../services/auth-http';


@Component({
    selector: 'account-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    @Output() close: EventEmitter<null> = new EventEmitter();
    showPass = false; /// TODO false
    user$: Observable<VOUser>;
    fullName: string;
    static loggedIn: Function;


    login = { username: 'al3kosvh@gmail.com', password: 'mio,mio' };


    // confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);

    signUp() {
        console.log('Sign Up Data:', this.login);
    }


    constructor(
        private loginService: AuthHttpMy,

    ) {
        this.user$ = loginService.user$;
    }

    ngOnInit() {
    }

    onCloseClick() {
        // this.modal.closeWindow('close button clicked '); // parameter just for testing
    }

    onSubmit(): void {


        this.loginService.login(this.login.username, this.login.password).subscribe(res => {
            if (res) {
                this.fullName = res.firstName + ' ' + res.lastName;
                if (SigninComponent.loggedIn) SigninComponent.loggedIn();
                // setTimeout(()=>this.modal.closeWindow('login success'), 3000);
            }
            else console.error(' error login');
        });

    }


}
