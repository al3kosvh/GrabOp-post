import { Component, Inject, EventEmitter, OnInit, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { SOAuthenticateResponse } from '../../../../models/sos';
// import {LoginService} from '../login.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { VOUser } from '../../models/vouser';
import { AuthHttpService } from '../../services/auth-http.service';

import { SigninDialogComponent } from './dialog/signin-dialog.component';


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

    signinData: Models.SignIn = { username: 'al3kosvh@gmail.com', password: 'mio,mio', rememberMe: false };


    // confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);

    signIn() {
        console.log('Sign In Data:', this.signinData);
    }


    constructor(
        private loginService: AuthHttpService,
        public dialog: MdDialog

    ) {
        this.user$ = loginService.user$;
    }

    ngOnInit() {
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SigninDialogComponent, {
            width: '250px',
            data: { username: this.signinData.username, password: this.signinData.password }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('dialog closed');
            this.signinData.username = result.username;
            this.signinData.password = result.password;
        });
    }

    onSubmit(): void {
        this.loginService.login(this.signinData.username, this.signinData.password).subscribe(res => {
            if (res) {
                this.fullName = res.firstName + ' ' + res.lastName;
                if (SigninComponent.loggedIn) SigninComponent.loggedIn();
                // setTimeout(()=>this.modal.closeWindow('login success'), 3000);
            }
            else console.error(' error login');
        });
    }


}
