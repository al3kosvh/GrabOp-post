
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

// Services
import { AuthenticationService } from '../../../account/services/authentication.service';
import { SettingsService } from '../../services/settings.service';
import { SettingsName } from '../../models/settings.enum';


@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    settings: Models.Setting[];
    SettingsName = SettingsName;
    accountId: string;
    
    constructor(
        private accountService: AuthenticationService,
        private settingsService: SettingsService,
        private route: ActivatedRoute       
    ) { }

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
}
