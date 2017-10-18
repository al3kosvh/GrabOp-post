import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

//App Services
import { AuthenticationService } from '../../services/authentication.service';

//App Components
import { RecoverLauncherComponent } from '../recover/launcher/recover-launcher.component';

@Component({
    selector: 'account-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {

    private signinData: Models.SOAuthenticateBasic;
    private loading: boolean;

    constructor(
        public dialog: MatDialog,
        public matDialogRef: MatDialogRef<SignInComponent>,
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
