import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthenticationService } from '../../../services/authentication.service';
import { SignUpService } from '../../../services/signup.service';

@Component({
    selector: 'signup-dialog',
    templateUrl: './signup-dialog.component.html',
    styleUrls: ['./signup-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

    private user: Models.VOUserExt = { occupation: 1 } as Models.VOUserExt;
    private userFormGroup: FormGroup;

    private loading = false;
    private checkingEmail = false;
    private errorMessage = "";
    private emailMessage = "";

    constructor(
        public dialogRef: MdDialogRef<SignUpDialogComponent>,
        private formBuilder: FormBuilder,
        private signupService: SignUpService
    ) {
    }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
    }

    checkEmail(email) {
        this.checkingEmail = true;
        this.signupService.verifyEmail(email).subscribe(
            value => {
                this.checkingEmail = false;
                console.log(value);
            },
            error => {
                this.checkingEmail = false;
                this.emailMessage = "Email error";
                console.log(error);
            });
    }

    onSubmit(): void {
        this.loading = true;
        this.errorMessage = '';
        /*this.signupService.signIn(this.signinData).subscribe(
            value => {
                this.dialogRef.close();
                this.loading = false;
            },
            error => {
                switch (error.status) {
                    case 0:
                        this.errorMessage = 'Conection error';
                        break;
                    case 401:
                        this.errorMessage = 'Username or password incorrect';
                        break;
                    default:
                        this.errorMessage = error.statusText;
                }
                this.loading = false;
            }
        );*/
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
