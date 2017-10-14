import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

// Services
import { AuthenticationService } from '../../../services/authentication.service';

//Components
import { RecoverRequestComponent } from '../../recover/request/recover-request.component';

@Component({
    selector: 'signin-dialog',
    templateUrl: './signin-dialog.component.html',
    styleUrls: ['./signin-dialog.component.css']
})
export class SignInDialogComponent {

    private signinData: Models.SOAuthenticateBasic;
    private loading: boolean;

    constructor(
        public dialog: MatDialog,
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

    openRecover(): void {
        this.matDialogRef.close();
        let config: MatDialogConfig = {
            width: '350px',
        }
        this.dialog.open(RecoverRequestComponent, config);
    }

    onClose(): void {
        this.matDialogRef.close();
    }
}
