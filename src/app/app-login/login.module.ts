import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginNewComponent} from './login-new/login-new.component';
import {LoginNewUsernameComponent} from './login-new/login-new-username/login-new-username.component';
import {LoginNewConfirmComponent} from './login-new/login-new-confirm/login-new-confirm.component';

//import {UploadService} from '../services/upload.service';
// import {MdCard, MdCardContent, MdCardModule, MdCardTitle, MdCheckboxModule, MdInputModule} from '@angular/material';
import {ValidateEmailDirective} from './login-validators/validate-email.directive';
import {CheckEmailDirective} from './login-validators/check-email.directive';
import {LoginRecoveryComponent} from './login-recovery/login-recovery.component';
import {MaterialModuleApp} from '../shared/material-app.module';
import {LoginNewCompanyComponent} from './login-new/login-new-company/login-new-company.component';
import {LoginPanelComponent} from './login-panel/login-panel.component';

// import {LoginButtonComponent} from './login-button/login-button.component';
// import {LoginNewButtonComponent} from './login-new-button/login-new-button.component';




const homeRoute: Routes = [
  { path: '',  component: LoginNewComponent
    , children: [
    {path: '', component: LoginNewComponent, redirectTo: 'username'}
    , {path: 'username', component: LoginNewUsernameComponent}
    , {path: 'confirm/:token', component: LoginNewConfirmComponent}
    , {path: 'resetpassword/:token', component: LoginRecoveryComponent}
  ]

  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleApp,
    RouterModule.forChild(homeRoute)
  ],
  declarations: [
    LoginNewComponent,
    LoginNewUsernameComponent,
    LoginNewConfirmComponent,
    LoginRecoveryComponent,
    ValidateEmailDirective,
    CheckEmailDirective,
    LoginNewCompanyComponent,

  ]
 /* providers: [UploadService]*/
})
export class LoginModule { }
