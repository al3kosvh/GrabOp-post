import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {

  message: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: string,
    private matDialogRef: MatDialogRef<ModalAlertComponent>
  ) { }

  ngOnInit() {
    this.message = this.data;
  }

  closeDialog() {
    this.matDialogRef.close('OK');
  }

}
