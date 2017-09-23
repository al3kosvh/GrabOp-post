import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import { VOUser } from '../../models/vouser';

import { SOAuthenticateResponse } from '../../../../models/sos';

// Services
import { AuthHttpService } from '../../services/auth-http.service';

@Component({
    selector: 'signin-dialog',
    templateUrl: './signin-dialog.component.html',
    styleUrls: ['./signin-dialog.component.css']
})
export class SigninDialogComponent {

    private user: Observable<VOUser>;
    private signinData: Models.SignIn = { username: '', password: '', rememberMe: false };
    private errorMessage: string;

    constructor(
        public dialogRef: MdDialogRef<SigninDialogComponent>,
        private loginService: AuthHttpService
    ) {
        this.user = loginService.user$;
    }

    onSubmit(): void {
        this.loginService.login(this.signinData.username, this.signinData.password).subscribe(response => {
            console.log(response);
            if (response) {
                this.dialogRef.close();
                //if (SigninComponent.loggedIn) SigninComponent.loggedIn();
                setTimeout(() => this.dialogRef.close('login success'), 3000);
            }
            else {
                this.errorMessage = 'Error login';
                console.error(response);
            }
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
