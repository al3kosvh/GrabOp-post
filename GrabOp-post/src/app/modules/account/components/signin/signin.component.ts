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
        let dialogRef = this.dialog.open(SigninDialogComponent, {

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            /*this.signinData.username = result.username;
            this.signinData.password = result.password;*/
        });
    }

}


@Component({
    selector: 'signin-dialog',
    templateUrl: 'signin-dialog.component.html',
})
export class SigninDialogComponent {

    user$: Observable<VOUser>;
    signinData: Models.SignIn = { username: '', password: '', rememberMe: false };
    errorMessage: string;

    constructor(
        public dialogRef: MdDialogRef<SigninDialogComponent>,
        private loginService: AuthHttpService
    ) {
        this.user$ = loginService.user$;
    }

    onSubmit(): void {
        console.log(this.signinData);
        this.loginService.login(this.signinData.username, this.signinData.password).subscribe(response => {
            if (response) {
                console.error(response); 
                this.dialogRef.close();
                //if (SigninComponent.loggedIn) SigninComponent.loggedIn();
                // setTimeout(()=>this.modal.closeWindow('login success'), 3000);
            }
            else {                 
                this.errorMessage = 'Error login';
                console.error(response);
            }
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
