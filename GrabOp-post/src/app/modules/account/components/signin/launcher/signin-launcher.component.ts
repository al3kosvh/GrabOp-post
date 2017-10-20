import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

// Services
import { AuthenticationService } from '../../../services/authentication.service';
import { SignInComponent } from '../signin.component';

@Component({
    selector: 'account-signin-launcher',
    templateUrl: './signin-launcher.component.html',
    styleUrls: ['./signin-launcher.component.css']
})
export class SignInLauncherComponent {

    constructor(
        public dialog: MatDialog
    ) { }

    openDialog(): void {
        let config: MatDialogConfig = {
            width: '350px',
        }
        this.dialog.open(SignInComponent, config);
    }

}
