import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-prompt.component.html',
  styleUrls: ['./modal-prompt.component.css']
})
export class ModalPromptComponent {
  message: string;
  messageRes: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: string,
    private matDialogRef: MatDialogRef<ModalPromptComponent>
  ) { }

  ngOnInit() {
    this.message = this.data;
  }

  clickOk() {
    this.matDialogRef.close(this.messageRes);
  }

  clickCancel() {
    this.matDialogRef.close();
  }

}
