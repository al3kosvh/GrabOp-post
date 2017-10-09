import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatDialogModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule,
    MatListModule, MatTabsModule, MatStepperModule, MatRadioModule
} from '@angular/material';

// Components
//import { SignupComponent } from './components/signup_old/signup.component';
//import { SignupButtonComponent } from './components/signup_old/button/signup-button.component';

import { SignUpComponent } from './components/signup/signup.component';
import { SignUpDialogComponent } from './components/signup/dialog/signup-dialog.component';
import { SignUpConfirmComponent } from './components/signup/confirm/signup-confirm.component';

import { SignInComponent } from './components/signin/signin.component';
import { SignInDialogComponent } from './components/signin/dialog/signin-dialog.component';

import { AccountRecoverComponent } from './components/recover/recover.component';

import { SignOutComponent } from './components/signout/signout.component';

// Directives
import { ValidateEmailDirective } from './directives/validate-email.directive';
import { CheckEmailDirective } from './directives/check-email.directive';

// Services
import { UploadService } from './services/upload.service';
import { AuthenticationService } from './services/authentication.service';
import { AccountStorageService } from './services/account-storage.service';
import { HttpService } from './services/http.service';
import { AuthGuard } from './services/auth.guard';
import { SignUpService } from './services/signup.service';

import { SharedModule } from '../shared/shared.module';

// import {SigninButtonComponent} from './login-button/button.component';
// import {SignupButtonComponent} from './login-new-button/signup-button.component';

const routes: Routes = [
    /*{
        path: 'join-us', component: SignUpComponent, outlet: 'slideRight', data: { animation: 'in' },
        children: [
            { path: '', redirectTo: 'username', pathMatch: 'full' },
            { path: 'username', component: SignupUsernameComponent },
            { path: 'confirm/:token', component: SignupConfirmComponent },
            { path: 'resetpassword/:token', component: AccountRecoverComponent }
        ]
    },*/
    { path: 'signout', component: SignOutComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        MatTabsModule,
        MatStepperModule,
        MatRadioModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        SignInComponent,
        SignUpComponent,
        SignOutComponent
    ],
    declarations: [
        SignUpComponent,
        SignInComponent,
        SignOutComponent,
        SignInDialogComponent,
        SignUpDialogComponent,
        SignUpConfirmComponent,
        AccountRecoverComponent,
        ValidateEmailDirective,
        CheckEmailDirective
    ],
    providers: [
        UploadService,
        AuthenticationService,
        AuthGuard,
        SignUpService,
        AccountStorageService,
        HttpService
    ],
    entryComponents: [SignInDialogComponent, SignUpDialogComponent]
})
export class AccountModule { }
