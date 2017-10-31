import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

//App Validators
import { MatchPasswordValidator } from '../../validators/password-match.validator';

//App Services
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'account-recover',
    templateUrl: './account-recover.component.html',
    styleUrls: ['./account-recover.component.css']
})
export class AccountRecoverComponent implements OnInit {

    private formGroup: FormGroup;
    private emailOrPhone: string;
    private code: string;
    private newPassword: string;
    private loading: boolean;
    private emailSent: boolean;
    private codeValid: boolean;

    private activeMessage: string;
    private activeTitle: string;
    private texts = {
        titleStart:"We are here to help you",
        titleCodeOk:"Success!",
        messageCodeOk:"We have verified your account. Please enter your new password",
        emailSent: "You will recive an email with an 8 digits code. Please enter the code in the box",
        smsSent: "You will recive a text with an 8 digits code. Please enter the code in the box",
        passwordChanged: "Password changed. Please try to sign in",
        passwordMismatchMessage: "Password mismatch"
    };

    constructor(
        private formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<AccountRecoverComponent>,
        private authenticationService: AuthenticationService
    ) {
        this.loading = false;
        this.emailSent = false;
        this.codeValid = false;
    }

    ngOnInit() {
        this.buildFormGroups();
    }

    private request() {
        this.loading = true;
        this.activeMessage = "";
        this.authenticationService.recoverRequest(this.emailOrPhone).subscribe(
            value => {
                this.activeMessage = this.texts.emailSent;
                console.log(value);
                this.loading = false;
                this.emailSent = true;
            },
            error => {
                this.loading = false;
            }
        );
    }

    private reset() {
        this.loading = true;
        this.activeMessage = "";
        this.authenticationService.resetPassword(this.code, this.emailOrPhone).subscribe(
            value => {
                this.activeMessage = this.texts.passwordChanged;
                console.log(value);
                this.loading = false;
                //api must login the user, redirect to home
            },
            error => {
                this.loading = false;
            }
        );
    }

    private checkCode() {
        this.codeValid = true;
        this.activeTitle = this.texts.titleCodeOk;
        this.activeMessage = this.texts.messageCodeOk;
    }

    private closeDialog(): void {
        this.matDialogRef.close();
    }

    private buildFormGroups() {
        this.formGroup = this.formBuilder.group({
            code: ['', [Validators.required, Validators.minLength(8)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        },
            {
                validator: MatchPasswordValidator.matchPassword
            }
        );
    }
}
