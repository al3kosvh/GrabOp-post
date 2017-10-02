
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Services
import { SettingsService } from '../../../services/settings.service';

@Component({
    selector: 'setting-select',
    templateUrl: './setting-select.component.html',
    styleUrls: ['./setting-select.component.css']
})
export class SettingSelectComponent implements OnInit {

    @Input() setting: Models.Setting;
    value: string;
    userId: string;
    units: string[];

    constructor(
        private route: ActivatedRoute,
        private settingsService: SettingsService
    ) {
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.userId = params['id'];
            }
        })
    }

    ngOnInit() {

        switch (this.setting.name) {
            case 'distanceUnit': this.units = ['km', 'mile']; break;
            case 'currency': this.units = ['CAD', 'USD']; break;
            default:
        }

        if (this.setting.fieldtype == "string") {
            this.value = this.setting.value;
        }
    }

    onChange() {

        this.settingsService.toggleSetting(this.userId, this.setting.settingid, this.value).subscribe(
            setting => {
                //console.log(setting);
            }
        );
    }
}
