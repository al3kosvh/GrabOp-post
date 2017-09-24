import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

// Services
import { AuthHttpService } from '../../services/auth-http.service';
import { SigninDialogComponent } from '../dialogs/signin-dialog.component';

@Component({
    selector: 'account-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {

    constructor(
        public dialog: MdDialog
    ) { }

    constructor(public dialog: MdDialog) {
    }

    openDialog(): void {
        let config: MdDialogConfig = {
            width: '350px',
        }
        this.dialog.open(SignInDialogComponent, config);
    }

}
