import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthHttpMy} from '../../../services/auth-http';
import {ModalAlertComponent} from '../../../shared/modal-alert/modal-alert.component';
import {MdDialog} from '@angular/material';
//import {UserEditService} from '../../../user-edit/user-edit.service';
import {LoginNewService} from '../login-new.service';

@Component({
  selector: 'app-login-new-confirm',
  templateUrl: './login-new-confirm.component.html',
  styleUrls: ['./login-new-confirm.component.css']
})
export class LoginNewConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginNewService: LoginNewService,
              private dialog: MdDialog) { }

  ngOnInit() {
    let token = this.route.snapshot.params.token;
    console.log('token ', token);
    this.verifyEmail(token);
    // this.router.params.subscribe({
    //   console.log('p', params.to);
    // })
  }

  verifyEmail(token){
    this.loginNewService.verifyEmail(token).subscribe(res => {
        console.log('Registration confirmed ', res);
        let dialogRef = this.dialog.open(ModalAlertComponent, {data: 'Registration confirmed'});
        dialogRef.afterClosed().subscribe(res => {
          if(res === 'OK'){
            this.router.navigate(['/guest', { login: 'login'}]);
          }
        });
        // this.router.navigate(['/guest', { username: user, foo: 'foo' }]);
    }, error => {
      let dialogRef = this.dialog.open(ModalAlertComponent, {data: 'Server error. Please try next time.'});
      console.error(' error login');
    });
  }

}
