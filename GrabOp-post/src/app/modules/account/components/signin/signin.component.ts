import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { SOAuthenticateResponse } from '../../../../models/sos';
// import {LoginService} from '../login.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { VOUser } from '../../models/vouser';
import { AuthHttpService } from '../../services/auth-http.service';

@Component({
    selector: 'account-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {

    // confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);

    constructor(public dialog: MdDialog) {
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SigninDialogComponent, {});
    }

}


@Component({
    selector: 'signin-dialog',
    templateUrl: 'signin-dialog.component.html',
})
export class SigninDialogComponent {

    signinData: Models.SignIn = { username: '', password: '', rememberMe: false };
    errorMessage: string;

    constructor(
        public dialogRef: MdDialogRef<SigninDialogComponent>,
        private authenticationService: AuthHttpService
    ) {

    }

    onSubmit(): void {
        this.authenticationService.login(this.signinData)
            .subscribe(
            data => {
                this.dialogRef.close();
            },
            error => {
                this.errorMessage = 'Username or password is incorrect';
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
