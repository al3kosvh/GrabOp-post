import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDialogModule } from '@angular/material';

// Components
import { SignupComponent } from './components/signup/signup.component';
import { SignupUsernameComponent } from './components/signup/username/signup-username.component';
import { SignupConfirmComponent } from './components/signup/confirm/signup-confirm.component';
import { AccountRecoverComponent } from './components/recover/recover.component';
import { SignupCompanyComponent } from './components/signup/company/signup-company.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigninDialogComponent } from './components/dialogs/signin-dialog.component';

// Directives
import { ValidateEmailDirective } from './directives/validate-email.directive';
import { CheckEmailDirective } from './directives/check-email.directive';

// Services
import { UploadService } from './services/upload.service';
import { AuthHttpService } from './services/auth-http.service';

import { SharedModule } from '../shared/shared.module';

// import {SigninButtonComponent} from './login-button/button.component';
// import {SignupButtonComponent} from './login-new-button/signup-button.component';

const homeRoute: Routes = [
   { path: 'username', component: SignupUsernameComponent },
   { path: 'confirm/:token', component: SignupConfirmComponent },
   { path: 'resetpassword/:token', component: AccountRecoverComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(homeRoute),
        SharedModule,
        MdDialogModule        
    ],
    exports: [
        SigninComponent,
        SignupComponent,
        MdDialogModule
    ],
    declarations: [
        SignupComponent,
        SigninComponent,
        SigninDialogComponent,
        SignupUsernameComponent,
        SignupConfirmComponent,
        AccountRecoverComponent,
        ValidateEmailDirective,
        CheckEmailDirective,
        SignupCompanyComponent
    ],
    providers: [
        UploadService,
        AuthHttpService
    ],
    entryComponents: [SigninDialogComponent]
})
export class AccountModule { }
