import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MdDialogRef} from '@angular/material';

import {SOAuthenticateResponse} from '../../models/sos';
// import {LoginService} from '../login.service';
import {Router} from '@angular/router';
//import {ModalWindowService} from '../../services/modal-window.service';
import {Observable} from 'rxjs/Observable';
import {VOUser} from '../vouser';
import {AuthHttpMy} from '../../services/auth-http';
//import {FormControl} from '@angular/forms';
// import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  showPass: boolean = true; /// TODO false

  // confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);

  signUp() {
    console.log("Sign Up Data:" , this.login);
  }

  @Output() close: EventEmitter<null> = new EventEmitter();

  user$: Observable<VOUser>;
  fullName: string;


  login = {username: 'al3kosvh@gmail.com', password: 'mio,mio'};

  constructor(
    private loginService: AuthHttpMy,

  ) {
    this.user$ = loginService.user$;
  }

  ngOnInit() {
  }

  onCloseClick() {
   // this.modal.closeWindow('close button clicked '); // parameter just for testing
  }

  onSubmit(): void {


    this.loginService.login(this.login.username, this.login.password).subscribe(res => {
      if(res){
        this.fullName = res.firstName + ' ' + res.lastName;
        //setTimeout(()=>this.modal.closeWindow('login success'), 3000);
      }
      else console.error(' error login');
      });

  }


}
