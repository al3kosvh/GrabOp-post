
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Services
import { AuthHttpService } from '../../../account/services/auth-http.service';
import { SettingsService } from '../../services/settings.service';
import { SettingsName } from '../../models/settings';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    private settings: Models.Setting[];
    private SettingsName = SettingsName;

    constructor(
        private accountService: AuthHttpService,
        private settingsService: SettingsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.loadSettings(params['id']);
            }
        })
    }

    private loadSettings(accountId: string): void {
        this.settingsService.getSettings(accountId).subscribe(
            settings => {
                this.settings = settings;                
                for (let setting of settings) {
                    console.log(setting);
                }
            }
        );
    }
}
