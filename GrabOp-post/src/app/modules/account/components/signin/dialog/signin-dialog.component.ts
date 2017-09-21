import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'signin-dialog',
    templateUrl: 'signin-dialog.component.html',
})
export class SigninDialogComponent {

    constructor(
        public dialogRef: MdDialogRef<SigninDialogComponent>,
        @Inject(MD_DIALOG_DATA) public signinData: Models.SignIn) {

        this.signinData = <Models.SignIn>{ rememberMe: false };
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}