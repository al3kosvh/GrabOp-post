
import { Component, Input } from '@angular/core';

// Services
import { AuthenticationService } from '../../../../account/services/authentication.service';
import { SettingsService } from '../../../services/settings.service';
import { HttpErrorService } from '../../../../shared/services/http-error.service';

@Component({
    selector: 'security-settings',
    templateUrl: './security-settings.component.html',
    styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent {

    @Input() accountId: string;
    inProcess: boolean = false;
    model: Models.ChangeUserPassword

    constructor(
        private accountService: AuthenticationService,
        private settingsService: SettingsService,
    ) {
        this.model = <Models.ChangeUserPassword>{};
    }

    private onChangePassword() {
        this.inProcess = true;
        this.settingsService.changePassword(this.accountId, this.model).subscribe(
            response => {
                this.inProcess = false;
            },
            error => {
                this.inProcess = false
            }
        );
    }
}
