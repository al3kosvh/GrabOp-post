import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

//App Components
import { SignInLauncherComponent } from '../../signin/launcher/signin-launcher.component';

//App Services
import { SignUpService } from '../../../services/signup.service';

@Component({
    selector: 'signup-confirm',
    templateUrl: './signup-confirm.component.html',
    styleUrls: ['./signup-confirm.component.css']
})
export class SignUpConfirmComponent implements AfterViewInit {

    @ViewChild(TemplateRef) ref;

    private message = "";
    private verified = true;
    private dialogRef: MatDialogRef<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private signupService: SignUpService,
        private dialog: MatDialog
    ) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.verifyEmail();
        }, 0);
    }

    verifyEmail() {
        let token = this.route.snapshot.params.token;
        if (!token) {
            this.signupService.verifyEmail(token).subscribe(res => {                
                this.verified = true;
                this.openDialog();
            }, error => {
                this.message = 'Error verifing email.';
                this.openDialog();
            });
        } else {
            this.back();
        }
    }

    openDialog(): void {
        this.dialogRef = this.dialog.open(this.ref, { width: '400px' });

        this.dialogRef.afterClosed().subscribe(() => {            
            //TODO: login before redirecto to HOME
            if(this.verified)
                this.router.navigate(['/home']);
            else
                this.back();
        });
    }

    back() {
        this.router.navigate(['../']);
    }

}
