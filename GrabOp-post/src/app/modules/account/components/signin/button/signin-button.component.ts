import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SigninComponent } from '../signin.component';
// import {ModalWindowService} from '../../services/modal-window.service';


@Component({
    selector: 'signin-button',
    templateUrl: './signin-button.component.html',
    styleUrls: ['./signin-button.component.css']
})
export class SigninButtonComponent implements OnInit {

    selectedOption: string;

    constructor(
        private dialog: MdDialog
        // private modal: ModalWindowService
    ) { }

    ngOnInit() {

    }

    loginClick(evt) {

        this.dialog.open(SigninComponent, {
            width: '400px',
            height: '400px'
        })


        /*this.modal.openWindow(SigninComponent, (res) => {
          console.log('SigninComponent  ', res);
        });*/
    }

}
