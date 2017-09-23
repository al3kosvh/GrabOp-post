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
export class SignInComponent {

    // confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);

    constructor(public dialog: MdDialog) {
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SignInDialogComponent, {});
    }

}


@Component({
    selector: 'signin-dialog',
    templateUrl: 'signin-dialog.component.html',
})
export class SignInDialogComponent {

    signinData: Models.SignIn = { username: '', password: '', rememberMe: false };
    errorMessage: string;
    loading: boolean = false;

    constructor(
        public dialogRef: MdDialogRef<SignInDialogComponent>,
        private authenticationService: AuthHttpService
    ) {

    }

    onSubmit(): void {
        this.loading = true;
        this.authenticationService.signIn(this.signinData)
            .subscribe(
            data => {
                this.dialogRef.close();
                this.loading = false;
            },
            error => {
                this.errorMessage = 'Username or password is incorrect';
                this.loading = false;
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
