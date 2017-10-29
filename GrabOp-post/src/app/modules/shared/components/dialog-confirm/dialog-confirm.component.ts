import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'dialog-confirm',
    templateUrl: './dialog-confirm.component.html',
    styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent {    

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: string,
        private matDialogRef: MatDialogRef<DialogConfirmComponent>
    ) { }

}
