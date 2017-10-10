import { Component, Input, OnChanges } from '@angular/core';
import { VOUserExt } from '../../../account/models/vouser';
//import {UserCommentsComponent} from '../user-comments/user-comments.component';

// Services
import { ModalWindowService } from '../../../shared/services/modal-window.service';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
    selector: 'user-bio',
    templateUrl: './user-bio.component.html',
    styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnChanges {

    @Input() person: VOUserExt;    

    constructor(
        public modal: ModalWindowService,
        private profileService: ProfileService
    ) { }

    ngOnChanges() {
        
    }
}
