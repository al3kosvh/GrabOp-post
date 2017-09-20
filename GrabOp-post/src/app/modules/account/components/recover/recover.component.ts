import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth-http.service';
import { MdDialog } from '@angular/material';
import { ModalAlertComponent } from '../../../shared/components/modal-alert/modal-alert.component';
import { FormControl } from '@angular/forms';
//import {UserEditService} from '../../user-edit/user-edit.service';

@Component({
    selector: 'account-recover',
    templateUrl: './recover.component.html',
    styleUrls: ['./recover.component.css']
})
export class AccountRecoverComponent implements OnInit {

    toolsDisadled: boolean = true;
    showPass: boolean = true; /// TODO false
    confirm;

    token: string;
    newPassword: string;
    passwordOK: boolean;

    constructor(private route: ActivatedRoute,
        private router: Router,
        // private userEditService: UserEditService,
        private dialog: MdDialog) { }

    ngOnInit() {
        this.confirm = new FormControl(this.newPassword, [(fc) => this.areEqual(this.newPassword, fc)]);
        this.token = this.route.snapshot.params.token;
        console.log('token ', this.token);
        // this.router.params.subscribe({
        //   console.log('p', params.to);
        // })
    }

    areEqual(password: string, repeat: any) {
        // console.log(password,repeat.value);
        if (password && password == repeat.value && password != '') {
            this.passwordOK = true;
            return null;
        } else {
            this.passwordOK = false;
            return { areEqual: false }
        }
    }

    onPasswordChanged(evt): void {
        this.newPassword = evt;
        this.confirm.updateValueAndValidity();
    }

    onSubmit(): void {

        /* this.userEditService.resetPassword(this.token, this.newPassword).subscribe(res => {
           console.log('Reset Password Success ', res);
           let dialogRef = this.dialog.open(ModalAlertComponent, {data: 'Reset Password Success.'});
           dialogRef.afterClosed().subscribe(res => {
             if(res === 'OK'){
               this.router.navigate(['/guest', { login: 'login'}]);
             }
           });
         }, error => {
           let dialogRef = this.dialog.open(ModalAlertComponent, {data: 'Reset Password Error.'});
           console.error(' error login');
         });*/
    }

    resetPass() {
        console.log('reset pass');
    }


}
