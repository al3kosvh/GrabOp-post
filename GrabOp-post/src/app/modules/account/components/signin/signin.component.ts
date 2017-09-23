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
export class SigninComponent {

    constructor(
        public dialog: MdDialog
    ) { }

    openDialog(): void {

        let config: MdDialogConfig = {
            width: '350px',
        }

        let dialogRef = this.dialog.open(SigninDialogComponent, config);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            /*this.signinData.username = result.username;
            this.signinData.password = result.password;*/
        });
    }

}
