import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SignUpService } from '../../../services/signup.service';
import { ModalWindowService } from '../../../../shared/services/modal-window.service';
import { SignupComponent } from '../signup.component';

@Component({
    selector: 'signup-button',
    templateUrl: './signup-button.component.html',
    styleUrls: ['./signup-button.component.css']
})
export class SignupButtonComponent implements OnInit {

    selectedOption: string;

    constructor(
        private dialog: MdDialog,
        signupService: SignUpService,
        private modal: ModalWindowService
    ) { }

    ngOnInit() { }

    loginClick(evt) {
        this.modal.openWindow(SignupComponent, (res) => {
            console.log('SignupComponent  ', res);
        });
    }

}
//
// import { Component, OnInit } from '@angular/core';
// import {MdDialog} from '@angular/material';
// import {LoginService} from '../../login.service';
// import {ModalWindowService} from '../../../myservices/modal-window.service';
// import {SigninComponent} from '../../login-panel/signin.component';
// import {SignupComponent} from '../signup.component';
//
// @Component({
//   selector: 'signup-button',
//   templateUrl: './signup-button.component.html',
//   styleUrls: ['./signup-button.component.css']
// })
// export class SignupButtonComponent implements OnInit {
//
//   selectedOption: string;
//
//   constructor(private dialog: MdDialog, loginService: LoginService, private modal: ModalWindowService ) { }
//
//   ngOnInit() {  }
//
//   loginClick(evt) {
//     this.modal.openWindow(SigninComponent, (res) => {
//       console.log('SigninComponent  ', res);
//     });
//   }
// }
