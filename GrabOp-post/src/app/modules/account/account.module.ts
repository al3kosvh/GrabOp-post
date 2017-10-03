import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatDialogModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule,
    MatListModule, MatTabsModule
} from '@angular/material';

// Components
//import { SignupComponent } from './components/signup/signup.component';
import { SignUpComponent } from './components/sign-up/signup.component';
import { SignupUsernameComponent } from './components/signup/username/signup-username.component';
import { SignupConfirmComponent } from './components/signup/confirm/signup-confirm.component';
import { AccountRecoverComponent } from './components/recover/recover.component';
import { SignupCompanyComponent } from './components/signup/company/signup-company.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignInDialogComponent } from './components/signin/dialog/signin-dialog.component';
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
import { SignupService } from './services/signup.service';

import { SharedModule } from '../shared/shared.module';

// import {SigninButtonComponent} from './login-button/button.component';
// import {SignupButtonComponent} from './login-new-button/signup-button.component';

const routes: Routes = [
    /*{
        path: 'join-us', component: SignupComponent, outlet: 'slideRight', data: { animation: 'in' },
        children: [
            { path: '', redirectTo: 'username', pathMatch: 'full' },
            { path: 'username', component: SignupUsernameComponent },
            { path: 'confirm/:token', component: SignupConfirmComponent },
            { path: 'resetpassword/:token', component: AccountRecoverComponent }
        ]
    },*/
    { path: 'signout', component: SignOutComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignUpComponent, canDeactivate: [AuthGuard] },
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
        SignupUsernameComponent,
        SignupConfirmComponent,
        AccountRecoverComponent,
        ValidateEmailDirective,
        CheckEmailDirective,
        SignupCompanyComponent
    ],
    providers: [
        UploadService,
        AuthenticationService,
        AuthGuard,
        SignupService,
        AccountStorageService,
        HttpService
    ],
    entryComponents: [SignInDialogComponent]
})
export class AccountModule { }
