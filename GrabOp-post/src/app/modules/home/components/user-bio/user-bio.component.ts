import { Component, Input, OnInit } from '@angular/core';
import { VOUserExt } from '../../../account/models/vouser';
//import {UserCommentsComponent} from '../user-comments/user-comments.component';

// Services
import { ModalWindowService } from '../../../shared/services/modal-window.service';

@Component({
    selector: 'app-user-bio',
    templateUrl: './user-bio.component.html',
    styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnInit {

    @Input() user: VOUserExt = new VOUserExt();

    constructor(
        public modal: ModalWindowService
    ) { }

    ngOnInit() {
    }
}
