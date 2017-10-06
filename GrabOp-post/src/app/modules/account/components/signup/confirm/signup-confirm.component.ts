import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAlertComponent } from '../../../../shared/components/modal-alert/modal-alert.component';
import { MdDialog } from '@angular/material';
//import {UserEditService} from '../../../user-edit/user-edit.service';
import { SignUpService } from '../../../services/signup.service';

@Component({
    selector: 'signup-confirm',
    templateUrl: './signup-confirm.component.html',
    styleUrls: ['./signup-confirm.component.css']
})
export class SignUpConfirmComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private signupService: SignUpService,
        private dialog: MdDialog
    ) { }

    ngOnInit() {
        let token = this.route.snapshot.params.token;
        console.log('token ', token);
        this.verifyEmail(token);
        // this.router.params.subscribe({
        //   console.log('p', params.to);
        // })
    }

    verifyEmail(token) {
        this.signupService.verifyEmail(token).subscribe(res => {
            console.log('Registration confirmed ', res);
            let dialogRef = this.dialog.open(ModalAlertComponent, { data: 'Registration confirmed' });
            dialogRef.afterClosed().subscribe(res => {
                if (res === 'OK') {
                    this.router.navigate(['/guest', { login: 'login' }]);
                }
            });
            // this.router.navigate(['/guest', { username: user, foo: 'foo' }]);
        }, error => {
            let dialogRef = this.dialog.open(ModalAlertComponent, { data: 'Server error. Please try next time.' });
            console.error(' error login');
        });
    }

}
