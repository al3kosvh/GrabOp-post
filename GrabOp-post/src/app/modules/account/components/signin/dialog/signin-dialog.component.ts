import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import { VOUser } from '../../../models/vouser';

// Services
import { AuthenticationService } from '../../../services/authentication.service';

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
        private authenticationService: AuthenticationService
    ) {        
        this.signinData = { username: 'al3kosvh@gmail.com', password: 'mio,mio', rememberMe: false };
        this.loading = false;
    }

    onSubmit(): void {
        this.loading = true;
        this.errorMessage = '';
        this.authenticationService.signIn(this.signinData).subscribe(
            value => {
                this.dialogRef.close();
                this.loading = false;
            },
            error => {
                console.log('onSubmit error: ', error);
                this.errorMessage = 'Username or password is incorrect';
                this.loading = false;
            },
            () => {
                this.loading = false;
            }
        );
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
