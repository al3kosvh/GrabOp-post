import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';
import { VOUser } from '../../../models/vouser';

// Services
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'signin-dialog',
    templateUrl: './signin-dialog.component.html',
    styleUrls: ['./signin-dialog.component.css']
})
export class SignInDialogComponent {

    user: Observable<VOUser>;
    signinData: Models.SignIn;
    loading: boolean;

    constructor(
        public matDialogRef: MatDialogRef<SignInDialogComponent>,
        private authenticationService: AuthenticationService
    ) {
        this.signinData = { username: 'al3kosvh@gmail.com', password: 'mio,mio', rememberMe: false };
        this.loading = false;
    }

    onSubmit(): void {
        this.loading = true;
        this.authenticationService.signIn(this.signinData).subscribe(
            value => {
                this.matDialogRef.close();
                this.loading = false;
            },
            error => {                
                this.loading = false;
            }
        );
    }

    onClose(): void {
        this.matDialogRef.close();
    }
}
