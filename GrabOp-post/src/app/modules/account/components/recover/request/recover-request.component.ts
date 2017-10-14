import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';

// Services
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'recover-request',
    templateUrl: './recover-request.component.html',
    styleUrls: ['./recover-request.component.css']
})
export class RecoverRequestComponent {

    private usernameOrEmail: string;
    private message: string;
    private loading: boolean;

    constructor(
        public matDialogRef: MatDialogRef<RecoverRequestComponent>,
        private authenticationService: AuthenticationService
    ) {
        this.loading = false;
    }

    onSubmit(): void {
        this.loading = true;
        this.authenticationService.recoverRequest(this.usernameOrEmail).subscribe(
            value => {
                //this.matDialogRef.close();
                console.log(value);
                this.loading = false;
            },
            error => {
                this.loading = false;
            }
        );
    }

    onClose(): void {
        this.matDialogRef.close();
    }
}
