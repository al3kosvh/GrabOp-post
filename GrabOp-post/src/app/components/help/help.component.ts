import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

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
        public dialogRef: MdDialogRef<HelpComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.dialogRef.close();
    }
}
