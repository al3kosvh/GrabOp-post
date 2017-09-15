import { Component, OnInit } from '@angular/core';
import { ModalWindowService } from '../../shared/services/modal-window.service';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
    comment: string;
    comment_file: any;
    comment_image: any;

    constructor(private modal: ModalWindowService) {
    }

    ngOnInit() {
    }

    onCloseClick() {
        this.modal.closeWindow('close button clicked '); // parameter just for testing
    }

    onSubmit() {
        console.log(this.comment + this.comment_file + this.comment_image + 'send button clicked');
    }
}
