import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

// Services
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpDialogComponent } from './dialog/signup-dialog.component';

@Component({
    selector: 'account-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(public dialog: MdDialog) { }

    ngOnInit(): void {

    }

    openDialog(): void {
        const config: MdDialogConfig = {
            width: '350px',
        };
        this.dialog.open(SignUpDialogComponent, config);
    }

}
