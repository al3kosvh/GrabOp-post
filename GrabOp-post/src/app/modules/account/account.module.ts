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
import { AccountRecoverComponent } from './components/recover/account-recover.component';
import { RecoverLauncherComponent } from './components/recover/launcher/recover-launcher.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignInLauncherComponent } from './components/signin/launcher/signin-launcher.component';
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
        RecoverLauncherComponent,
        SignInLauncherComponent,
        SignOutComponent
    ],
    declarations: [
        AccountRecoverComponent,
        RecoverLauncherComponent,
        SignUpComponent,
        SignInComponent,
        SignInLauncherComponent,
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
        AccountRecoverComponent,
        SignInComponent,
        SignUpComponent
    ]
})
export class AccountModule { }
