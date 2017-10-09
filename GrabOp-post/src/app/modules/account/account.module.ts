import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatDialogModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule,
    MatListModule, MatTabsModule, MatStepperModule, MatRadioModule
} from '@angular/material';

//App Modules
import { SharedModule } from '../shared/shared.module';

//Account Components
import { SignUpComponent } from './components/signup/signup.component';
import { SignUpConfirmComponent } from './components/signup/confirm/signup-confirm.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignInDialogComponent } from './components/signin/dialog/signin-dialog.component';
import { AccountRecoverComponent } from './components/recover/recover.component';
import { SignOutComponent } from './components/signout/signout.component';

//Account Services
import { UploadService } from './services/upload.service';
import { AuthenticationService } from './services/authentication.service';
import { AccountStorageService } from './services/account-storage.service';
import { HttpService } from './services/http.service';
import { AuthGuard } from './services/auth.guard';
import { SignUpService } from './services/signup.service';

const routes: Routes = [
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
        SignOutComponent
    ],
    declarations: [
        SignUpComponent,
        SignInComponent,
        SignOutComponent,
        SignInDialogComponent,
        SignUpConfirmComponent,
        AccountRecoverComponent,
    ],
    providers: [
        UploadService,
        AuthenticationService,
        AuthGuard,
        SignUpService,
        AccountStorageService,
        HttpService
    ],
    entryComponents: [SignInDialogComponent, SignUpComponent]
})
export class AccountModule { }
