import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  comment: string;
  comment_file: any;
  comment_image: any; 

  constructor(
      public dialogRef: MatDialogRef<HelpComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {      
      this.dialogRef.close();      
  }
}
