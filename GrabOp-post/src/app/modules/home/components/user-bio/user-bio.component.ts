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

    @Input() user: VOUserExt;
    location: Models.ProfileLocation;

    constructor(
        public modal: ModalWindowService,
        private profileService: ProfileService
    ) {
        this.location = <Models.ProfileLocation>{};
    }

    ngOnChanges() {
        if (this.user) {
            this.profileService.getProfileLocation(this.user.id, 1).subscribe(
                location => {
                    this.location = location
                }
            );
        }
    }
}
