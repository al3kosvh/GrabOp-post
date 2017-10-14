import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

//Validators
import { MatchPasswordValidator } from './validators/password-match.validator';
import { EmailTakenValidator } from './validators/email-taken.validator';
import { UsernameTakenValidator } from './validators/username-taken.validator';

// Services
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpService } from '../../services/signup.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

    private user: Models.VOUserExt = { occupation: 1, role: "user" } as Models.VOUserExt;
    private formGroup: FormGroup;
    private submitting = false;

    private messages = {
        submitMessage: "",
        emailTakenMessage: "This email is already taken",
        passwordMismatchMessage: "Password mismatch",
        usernameTakenMessage: "This username is not available",
        connectionErrorMessage: "Connection error"
    };

    constructor(
        private formBuilder: FormBuilder,
        private signupService: SignUpService
    ) { }

    ngOnInit() {
        this.buildFormGroups();
    }


    private submit(): void {
        this.submitting = true;
        this.messages.submitMessage = "";
        let registerData: Models.VORegisterParameters = this.formArray.get([0]).value as Models.VORegisterParameters;

        //console.log('values to submit: ', this.formArray.get([0]).value);
        //this.signupService.register(this.formArray.get([0]).value).subscribe(
        this.signupService.register(registerData).subscribe(
            value => {
                console.log('register ok', value);
                this.user.id = value;
                console.log('register ok', this.user);
                this.signupService.registerContinue(this.user).subscribe(
                    value => {
                        console.log('profile update ok', value);
                        this.submitting = false;
                    },
                    error => {
                        this.messages.submitMessage = "Couldn't submit some data. Check your email to complete the proces."
                        this.submitting = false;
                    }
                );
            },
            error => {
                this.submitting = false;
            }
        );
        this.submitting = false;

    }

    private changeOccupation(value) {
        if (value == "1") {
            this.user.company = '';
        }
    }

    private buildFormGroups() {

        this.formGroup = this.formBuilder.group({

            formArray: this.formBuilder.array([
                this.formBuilder.group({
                    firstName: ['', Validators.required],
                    lastName: ['', Validators.required],
                    displayName: ['', Validators.required],
                    username: [
                        '',
                        [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Za-z0-9_-]{3,20}$')],
                        //Validators.composeAsync([UsernameTakenValidator.createValidator(this.signupService)])
                    ],
                    primaryEmail: [
                        '',
                        [Validators.required, Validators.email],
                        Validators.composeAsync([EmailTakenValidator.createValidator(this.signupService)])
                    ],
                    password: ['', [Validators.required, Validators.minLength(6)]],
                    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
                },
                    {
                        validator: MatchPasswordValidator.matchPassword
                    }
                ),

                this.formBuilder.group({
                    jobTitle: ['', Validators.required],
                    occupation: ['1', Validators.required],
                    company: ['', Validators.nullValidator],
                }),

                this.formBuilder.group({
                    phoneNumber: ['', Validators.required],
                    country: ['', Validators.required],
                    province: ['', Validators.required],
                    city: ['', Validators.required],
                }),
            ])
        });
    }

    get formArray(): AbstractControl | null {
        return this.formGroup.get('formArray');
    }

    private getFormControlErrors(formArrayIndex: number, controlName: string) {
        return this.formArray.get([formArrayIndex]).get(controlName).errors;
    }

    private getFormControl(formArrayIndex: number, controlName: string) {
        return this.formArray.get([formArrayIndex]).get(controlName);
    }
}
