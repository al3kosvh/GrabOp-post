import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginPanelComponent} from '../login-panel/login-panel.component';
// import {ModalWindowService} from '../../services/modal-window.service';


@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  selectedOption: string;

  constructor(
    private dialog: MdDialog
   // private modal: ModalWindowService
  ) { }

  ngOnInit() {

  }

  loginClick(evt){

    this.dialog.open(LoginPanelComponent, {
      width:'400px',
      height:'400px'
    })


    /*this.modal.openWindow(LoginPanelComponent, (res) => {
      console.log('LoginPanelComponent  ', res);
    });*/
  }

}
