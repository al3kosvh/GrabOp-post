import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './components/signup/signup.component';
import { SignupUsernameComponent } from './components/signup/username/signup-username.component';
import { SignupConfirmComponent } from './components/signup/confirm/signup-confirm.component';

//import {UploadService} from '../services/upload.service';
// import {MdCard, MdCardContent, MdCardModule, MdCardTitle, MdCheckboxModule, MdInputModule} from '@angular/material';
import { ValidateEmailDirective } from './components/signup/validators/validate-email.directive';
import { CheckEmailDirective } from './components/signup/validators/check-email.directive';
import { AccountRecoverComponent } from './components/recover/recover.component';
import { SignupCompanyComponent } from './components/signup/company/signup-company.component';
import { SigninComponent } from './components/signin/signin.component';

// import {SigninButtonComponent} from './login-button/button.component';
// import {SignupButtonComponent} from './login-new-button/signup-button.component';




const homeRoute: Routes = [
    {
        path: '', component: SignupComponent
        , children: [
            { path: '', component: SignupComponent, redirectTo: 'username' }
            , { path: 'username', component: SignupUsernameComponent }
            , { path: 'confirm/:token', component: SignupConfirmComponent }
            , { path: 'resetpassword/:token', component: AccountRecoverComponent }
        ]

    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(homeRoute)
    ],
    declarations: [
        SignupComponent,
        SignupUsernameComponent,
        SignupConfirmComponent,
        AccountRecoverComponent,
        ValidateEmailDirective,
        CheckEmailDirective,
        SignupCompanyComponent,

    ]
    /* providers: [UploadService]*/
})
export class AccountModule { }
