import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

// Services
import { AuthenticationService } from '../../services/authentication.service';
import { SignInDialogComponent } from './dialog/signin-dialog.component';

@Component({
    selector: 'account-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {

    constructor(
        public dialog: MatDialog
    ) { }

    openDialog(): void {
        let config: MatDialogConfig = {
            width: '350px',
        }
        this.dialog.open(SignInDialogComponent, config);
    }

}
