
import { Component, Input } from '@angular/core';

// Services
import { AuthenticationService } from '../../../../account/services/authentication.service';
import { SettingsService } from '../../../services/settings.service';

@Component({
    selector: 'email-username-settings',
    templateUrl: './email-username-settings.component.html',
    styleUrls: ['./email-username-settings.component.css']
})
export class EmailUsernameSettingsComponent {

    @Input() accountId: string;
    inProcess: boolean = false;
    model: any;

    constructor(
        private accountService: AuthenticationService,
        private settingsService: SettingsService
    ) {
        this.model = {
            email: '',
            username: ''
        };
    }

    private onUpdate() {
        //this.inProcess = true;
        //this.settingsService.changePassword(this.accountId, this.model).subscribe(
        //    response => {
        //        this.inProcess = false;
        //    },
        //    error => {
        //        this.inProcess = false
        //    }
        //);
    }
}
