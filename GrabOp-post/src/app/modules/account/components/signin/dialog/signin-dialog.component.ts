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
    private signinData: Models.SignIn = { username: '', password: '', rememberMe: false };
    private errorMessage: string;

    constructor(
        public dialogRef: MdDialogRef<SignInDialogComponent>,
        private authenticationService: AuthHttpService
    ) {
        this.user = authenticationService.user$;
    }

    onSubmit(): void {
        this.authenticationService.signIn(this.signinData)
            .subscribe(
            data => {
                this.dialogRef.close();
            },
            error => {
                this.errorMessage = 'Username or password is incorrect';
            });
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
