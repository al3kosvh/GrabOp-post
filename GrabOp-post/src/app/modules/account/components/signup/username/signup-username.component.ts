import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { VOProfileSettings } from '../../../../../models/vos';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../../services/signup.service';
import { VOUserExt } from '../../../models/vouser';
import { confirmPassword } from '../validators/confirmPassword';
import { CheckEmailDirective } from '../validators/check-email.directive';

import { ModalWindowService } from '../../../services/modal-window.service';
import { MdDialog } from '@angular/material';
import { ModalAlertComponent } from '../../../../../shared/components/modal-alert/modal-alert.component';
import { UploadService } from '../../../../../services/upload.service';
import { RequestOptions } from '@angular/http';
import { AuthHttpMy } from '../../../services/auth-http';


@Component({
    selector: 'signup-username',
    templateUrl: './signup-username.component.html',
    styleUrls: ['./signup-username.component.css']
    ,
    providers: [UploadService]
})
export class SignupUsernameComponent implements OnInit, OnDestroy {

    @ContentChild(CheckEmailDirective)
    input: CheckEmailDirective;

    person: VOUserExt;
    // myForm:FormGroup;
    password: string;
    confirm;
    sb1: Subscription;
    usernameMsg: string;
    usernameOK: boolean;
    emailOK: boolean;
    passwordOK: boolean;
    emailMsg: string;
    formValid: boolean;
    restoreUsername: boolean;


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private authHttpMy: AuthHttpMy,
        private dialog: MdDialog,
        private uploadService: UploadService,
        private modal: ModalWindowService,
        private signupService: SignupService
    ) {
        //this.person = authHttpMy.userExt;

        this.sb1 = route.params.subscribe(params => {
            // console.log(params);
        });

    }

    upload(input) {
        this.uploadService.upload(input);
    }

    setNewUser() {
        console.log('Set New User', this.person);
    }

    onSubmit(): void {
        /* this.signupService.register(this.person).subscribe(res => {
           if (res.id) {
             console.log('onSubmit register res ', res);
             this.dialog.open(ModalAlertComponent, {data: 'Go to email confirm'});
             // this.router.navigate(['/guest', { username: user, foo: 'foo' }]);
           } else {
             this.dialog.open(ModalAlertComponent, {data: 'Registration error'});
             console.error('error registration', res);
           }
         },  error => {
           console.log('error register ', error);
           this.dialog.open(ModalAlertComponent, {data: 'Username already exists'});
     
         });
         */
    }

    // openModalDialog(){
    //   this.dialog.open(ModalAlertComponent, {data: 'Go to email confirm'});
    // }

    // confirm = new FormControl('', [confirmPassword.bind(undefined, this.person)]);

    areEqual(password: string, repeat: any) {
        // console.log(password,repeat.value);
        if (password && password === repeat.value && password !== '') {
            this.passwordOK = true;
            return null;
        } else {
            this.passwordOK = false;
            return { areEqual: false };
        }

    }

    onPasswordChanged(evt): void {
        this.password = evt;
        this.confirm.updateValueAndValidity();
    }


    ngOnInit(): void {
        //this.person = this.authHttpMy.userExt;
        this.password = this.person.password;
        this.confirm = new FormControl(this.password, [(fc) => this.areEqual(this.password, fc)]);
    }

    ngOnDestroy(): void {
        this.sb1.unsubscribe();

    }


    onUsernameFocus(): void {
        this.usernameMsg = '';
    }

    onUsernameBlur(): void {
        if (this.person.username && this.person.username !== '') {
            this.usernameOK = true;
        } else {
            this.usernameOK = false;
        }

        // this.joinusService.exists({username: this.model.username}, 'username').then(
        //     res => {
        //         console.log(res);
        //         if (res.error == 'exists') {
        //             this.usernameOK = false;
        //             this.usernameMsg = 'Username exists';
        //         } else if (res.success) {
        //             this.usernameOK = true;
        //             this.usernameMsg = 'OK';
        //         }
        //     })
    }

    onEmailFocus(): void {

        this.emailMsg = '';
        this.restoreUsername = false;
    }

    onEmailBlur(): void {
        if (this.person.primaryEmail && this.person.primaryEmail !== '') {
            this.emailOK = true;
        } else {
            this.emailOK = false;
        }
        console.log('onEmailBlur');
        // this.joinusService.exists({email: this.model.email}, 'email').then(
        //     res => {
        //         console.log(res);
        //         if (res.error == 'exists') {
        //             this.emailOK = false;
        //             this.emailMsg = 'email exists';
        //             this.restoreUsername = true;
        //
        //         } else if (res.success) {
        //             this.emailMsg = 'OK';
        //             this.emailOK = true;
        //         }
        //
        //         //this.userna.valid = false;
        //     })

    }

    evalueateForm(): boolean {
        return true;
    }


    goNext(): void {
        this.router.navigate(['../company'], { relativeTo: this.route });
    }

    // onNextClick(): void {
    //
    //   this.signupService.createAccount(this.person).then(
    //     (res:any) => {
    //       if (!res.error) {
    //         localStorage.setItem('account', JSON.stringify(res));
    //         this.goNext();
    //       }
    //       else this.usernameOK = false;
    //     }
    //   )
    // }

}
