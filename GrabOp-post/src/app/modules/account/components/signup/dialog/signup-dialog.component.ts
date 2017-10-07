import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    private formGroup: FormGroup;
    private nameFormGroup: FormGroup;
    private jobFormGroup: FormGroup;
    private locationFormGroup: FormGroup;

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
        this.buildFormGroups();
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
                switch (error.status) {
                    case 0:
                        this.emailMessage = 'Conection error';
                        break;
                    default:
                        this.emailMessage = error.statusText;
                }
            });
    }

    onSubmit(): void {
        this.loading = true;
        this.errorMessage = '';
    }

    onClose(): void {
        this.dialogRef.close();
    }

    get formArray(): AbstractControl | null {
        return this.formGroup.get('formArray');
    }

    private buildFormGroups() {
        this.formGroup = this.formBuilder.group({

            formArray: this.formBuilder.array([
                this.nameFormGroup,
                this.jobFormGroup,
                this.locationFormGroup
            ])
        });

        this.nameFormGroup = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            primaryEmail: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });

        this.jobFormGroup = this.formBuilder.group({
            jobTitle: ['', Validators.email],
            occupation: ['', Validators.email],
            company: ['', Validators.email],
        });

        this.locationFormGroup = this.formBuilder.group({
            phoneNumber: ['', Validators.email],
            country: ['', Validators.email],
            province: ['', Validators.email],
            city: ['', Validators.email],
        });
    }
}
