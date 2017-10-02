
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

// Services
import { AuthenticationService } from '../../../account/services/authentication.service';
import { SettingsService } from '../../services/settings.service';
import { SettingsName } from '../../models/settings.enum';
import { ErrorService } from '../../../shared/services/error.service';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    settings: Models.Setting[];
    SettingsName = SettingsName;
    accountId: string;
    changePasswordInProcess: boolean = false;

    model: Models.ChangeUserPassword
    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6)]);

    constructor(
        private accountService: AuthenticationService,
        private settingsService: SettingsService,
        private route: ActivatedRoute,
        private error: ErrorService
    ) {
        this.model = <Models.ChangeUserPassword>{};
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.accountId = params['id'];
                this.loadSettings(this.accountId);
            }
        });
    }

    private loadSettings(accountId: string): void {
        this.settingsService.getSettings(accountId).subscribe(
            settings => {
                this.settings = settings;
            });
    }

    private onChangePassword() {
        this.changePasswordInProcess = true;
        this.settingsService.changePassword(this.accountId, this.model).subscribe(
            response => {                
                this.changePasswordInProcess = false;
            },
            error => {
                this.error.resolve(error);
                this.changePasswordInProcess = false
            }
        );
    }
}
