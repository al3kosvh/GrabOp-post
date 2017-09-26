import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import { VOUser } from '../../../models/vouser';

// Services
import { AuthHttpService } from '../../../services/auth-http.service';

@Component({
    selector: 'signin-dialog',
    templateUrl: './signin-dialog.component.html',
    styleUrls: ['./signin-dialog.component.css']
})
export class SignInDialogComponent {

    private user: Observable<VOUser>;
    private signinData: Models.SignIn;
    private errorMessage: string;
    private loading: boolean;

    constructor(
        public dialogRef: MdDialogRef<SignInDialogComponent>,
        private authenticationService: AuthHttpService
    ) {
        this.user = authenticationService.user$;
        this.signinData = { username: 'al3kosvh@gmail.com', password: 'mio,mio', rememberMe: false };
        this.loading = false;
    }

    onSubmit(): void {
        this.loading = true;
        this.authenticationService.signIn(this.signinData)
            .subscribe(
            value => {
                this.dialogRef.close();
            },
            error => {
                this.errorMessage = 'Username or password is incorrect';
            },
            () => {
                this.loading = false;
            });
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
