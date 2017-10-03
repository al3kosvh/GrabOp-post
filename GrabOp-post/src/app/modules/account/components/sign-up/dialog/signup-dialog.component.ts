import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';
import { VOUser } from '../../../models/vouser';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

  private user: Observable<VOUser>;
  private signinData: Models.SignIn;
  private errorMessage: string;
  private loading: boolean;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<SignInDialogComponent>,
    private authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder
  ) {
    this.signinData = { username: 'al3kosvh@gmail.com', password: 'mio,mio', rememberMe: false };
    this.loading = false;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.loading = true;
    this.errorMessage = '';
    this.authenticationService.signIn(this.signinData).subscribe(
      value => {
        this.dialogRef.close();
        this.loading = false;
      },
      error => {
        switch (error.status) {
          case 0:
            this.errorMessage = 'Conection error';
            break;
          case 401:
            this.errorMessage = 'Username or password incorrect';
            break;
          default:
            this.errorMessage = error.statusText;
        }
        this.loading = false;
      }
    );
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
