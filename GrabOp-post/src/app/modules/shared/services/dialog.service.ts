import { Injectable, TemplateRef, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material";

// Components
import { DialogConfirmComponent } from '../components/dialog-confirm/dialog-confirm.component';

@Injectable()
export class DialogService {

    private dialogRef: MatDialogRef<Component>;

    constructor(
        private dialog: MatDialog
    ) { }

    open(component: any, callBack?: Function) {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }

        this.dialogRef = this.dialog.open(component);

        this.dialogRef.afterClosed().subscribe(result => {
            if (callBack) callBack(result);
            this.dialogRef = null;
        });

    }

    openConfirm(data?: any, callBack?: Function) {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }

        this.dialogRef = this.dialog.open(DialogConfirmComponent, { data });

        this.dialogRef.afterClosed().subscribe(result => {
            if (callBack) callBack(result);
            this.dialogRef = null;
        });
    }

    close(closeParams?: any): void {
        this.dialogRef.close(closeParams);
        this.dialogRef = null;
    }

}
