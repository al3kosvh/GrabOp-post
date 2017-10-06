import { Component, Input, OnChanges } from '@angular/core';
import { VOUserExt } from '../../../account/models/vouser';

// Services
import { ConnectionService } from '../../../connection/services/connection.service';

@Component({
    selector: 'profile-progress',
    templateUrl: './profile-progress.component.html',
    styleUrls: ['./profile-progress.component.css']
})
export class ProfileProgressComponent implements OnChanges {

    @Input() user: VOUserExt;
    percent: number = 0;

    constructor(
        private connectionService: ConnectionService
    ) { }

    ngOnChanges() {
        if (this.user) {
            //  A proﬁle with the email conﬁrmed and the required ﬁelds entered has a score of 50%
            if (this.checkRequiredFields) this.percent += 50;

            // Proﬁle picture   10 % 
            if (this.user.profile_pic) this.percent += 10;

            // First service posting 6 % 
            if (this.user.offers > 0) this.percent += 6;

            // Personal statement 5 % 
            if (this.user.description) this.percent += 5;

            // Resume 4 % 
            if (this.user.resume) this.percent += 4;

            // Background picture 3 %
            if (this.user.background_pic) this.percent += 3;

            // First project 2 % 
            //if (this.user) this.percent += 2;

            // Additional services 2 % for each extra service up to 4 % 
            //if (this.user.services) this.percent += 2;

            // Connections 1 % each up to a total of 10 %
            this.connectionService.getProfileConnectionsCount(this.user.id).subscribe(count => {
                if (count < 10)
                    this.percent += count;
                else
                    this.percent = 10;
            });
            
            // Skills 1 % each up to a total of 3 %
            if (this.user.skillset) {
                let count = this.user.skillset.length; 
                if (count < 3)
                    this.percent += count;
                else
                    this.percent += 3;
            }

            // First alliance members 1 % each up to a maximum of 3 %
            //if (this.user.services) this.percent += 1;

            this.percent = 78;
        }
        
    }

    checkRequiredFields(): boolean {
        return this.user.primaryEmail != "null"
            && this.user.phoneNumber != "null"
            && this.user.city != "null"
            && this.user.province != "null"
            && this.user.country != "null";
    }

}
