import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {

    message: string;

    constructor( @Inject(MD_DIALOG_DATA) private data: string,
        private mdDialogRef: MdDialogRef<ModalAlertComponent>) { }

    ngOnInit() {
        this.message = this.data;
    }

    closeDialog() {
        this.mdDialogRef.close('OK');
    }

}