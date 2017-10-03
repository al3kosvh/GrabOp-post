import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

// Services
import { AuthenticationService } from '../../services/authentication.service';
import { SignInDialogComponent } from './dialog/signup-dialog.component';

@Component({
    selector: 'app-account-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(public dialog: MdDialog) { }

    ngOnInit(): void {
      this.openDialog();
    }

    openDialog(): void {
        const config: MdDialogConfig = {
            width: '350px',
        };
        this.dialog.open(SignInDialogComponent, config);
    }

}
