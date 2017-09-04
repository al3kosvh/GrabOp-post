import { Component, Input, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-prompt.component.html',
  styleUrls: ['./modal-prompt.component.css']
})
export class ModalPromptComponent {
  message: string;
  messageRes: string;

  constructor(@Inject(MD_DIALOG_DATA) private data: string,
              private mdDialogRef: MdDialogRef<ModalPromptComponent>) {  }

  ngOnInit() {
    this.message = this.data;
  }

  clickOk(){
    this.mdDialogRef.close(this.messageRes);
  }

  clickCancel(){
    this.mdDialogRef.close();
  }

}