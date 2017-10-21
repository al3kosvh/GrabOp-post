
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Services
import { SettingsService } from '../../../services/settings.service';

@Component({
    selector: 'setting-slide-toggle',
    templateUrl: './setting-slide-toggle.component.html',
    styleUrls: ['./setting-slide-toggle.component.css']
})
export class SettingSlideToggleComponent implements OnInit {

    @Input() setting: Models.Setting;
    value: boolean;
    userId: string;

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
        if (this.setting.field_type == "bool") {
            this.value = (this.setting.value == "1") ? true : false;
        }
    }

    onToggle() {        

        this.settingsService.toggleSetting(this.userId, this.setting.setting_id, this.value ? "1" : "0").subscribe(
            setting => {
                //console.log(setting);
            }
        );
    }
}
