import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VOUser, VOUserExt } from '../../../models/vouser';

// Services
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'signup-dialog',
    templateUrl: './signup-dialog.component.html',
    styleUrls: ['./signup-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

    private user: VOUserExt = new VOUserExt();
    //private user = {};
    private companyFormGroup: FormGroup;
    private userFormGroup: FormGroup;
    private locationFormGroup: FormGroup;

    constructor(
        public dialogRef: MdDialogRef<SignUpDialogComponent>,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.companyFormGroup = this.formBuilder.group({
            //firstCtrl: ['', Validators.required]
        });
        this.userFormGroup = this.formBuilder.group({
            //firstCtrl: ['', Validators.required]
        });
        this.locationFormGroup = this.formBuilder.group({
          //firstCtrl: ['', Validators.required]
      });
    }

    onSubmit(): void {
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
