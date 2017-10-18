import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

//App Components
import { AccountRecoverComponent } from '../account-recover.component';

@Component({
    selector: 'recover-launcher',
    templateUrl: './recover-launcher.component.html',
    styleUrls: ['./recover-launcher.component.css']
})
export class RecoverLauncherComponent {

    constructor(
        public dialog: MatDialog
    ) { }

    openDialog(): void {
        let config: MatDialogConfig = {
            width: '350px',
        }
        this.dialog.open(AccountRecoverComponent, config);
    }

}
