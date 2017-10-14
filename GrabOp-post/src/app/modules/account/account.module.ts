import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    MatDialogModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule,
    MatListModule, MatTabsModule, MatStepperModule, MatRadioModule
} from '@angular/material';

//App Modules
import { SharedModule } from '../shared/shared.module';

//Account Components
import { AccountRecoverComponent } from './components/recover/recover.component';
import { RecoverRequestComponent } from './components/recover/request/recover-request.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignInDialogComponent } from './components/signin/dialog/signin-dialog.component';
import { SignOutComponent } from './components/signout/signout.component';
import { SignUpComponent } from './components/signup/signup.component';
import { SignUpConfirmComponent } from './components/signup/confirm/signup-confirm.component';

//Account Services
import { AccountStorageService } from './services/account-storage.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth.guard';
import { HttpService } from './services/http.service';
import { SignUpService } from './services/signup.service';
import { UploadService } from './services/upload.service';

const routes: Routes = [
    { path: 'signout', component: SignOutComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        RecoverRequestComponent,
        SignInComponent,
        SignOutComponent
    ],
    declarations: [
        AccountRecoverComponent,
        RecoverRequestComponent,
        SignUpComponent,
        SignInComponent,
        SignInDialogComponent,
        SignOutComponent,
        SignUpConfirmComponent
    ],
    providers: [
        AccountStorageService,
        AuthenticationService,
        AuthGuard,
        HttpService,
        SignUpService,
        UploadService
    ],
    entryComponents: [
        RecoverRequestComponent,
        SignInDialogComponent,
        SignUpComponent
    ]
})
export class AccountModule { }
