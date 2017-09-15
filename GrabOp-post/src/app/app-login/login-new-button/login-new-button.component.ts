import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginNewService } from '../login-new/login-new.service';
import { ModalWindowService } from '../../shared/services/modal-window.service';
import { LoginNewComponent } from '../login-new/login-new.component';

@Component({
    selector: 'app-login-new-button',
    templateUrl: './login-new-button.component.html',
    styleUrls: ['./login-new-button.component.css']
})
export class LoginNewButtonComponent implements OnInit {

    selectedOption: string;

    constructor(
        private dialog: MdDialog,
        loginNewService: LoginNewService,
        private modal: ModalWindowService
    ) { }

    ngOnInit() { }

    loginClick(evt) {
        this.modal.openWindow(LoginNewComponent, (res) => {
            console.log('LoginNewComponent  ', res);
        });
    }

}
//
// import { Component, OnInit } from '@angular/core';
// import {MdDialog} from '@angular/material';
// import {LoginService} from '../../login.service';
// import {ModalWindowService} from '../../../myservices/modal-window.service';
// import {LoginPanelComponent} from '../../login-panel/login-panel.component';
// import {LoginNewComponent} from '../login-new.component';
//
// @Component({
//   selector: 'app-login-new-button',
//   templateUrl: './login-new-button.component.html',
//   styleUrls: ['./login-new-button.component.css']
// })
// export class LoginNewButtonComponent implements OnInit {
//
//   selectedOption: string;
//
//   constructor(private dialog: MdDialog, loginService: LoginService, private modal: ModalWindowService ) { }
//
//   ngOnInit() {  }
//
//   loginClick(evt) {
//     this.modal.openWindow(LoginPanelComponent, (res) => {
//       console.log('LoginPanelComponent  ', res);
//     });
//   }
// }
