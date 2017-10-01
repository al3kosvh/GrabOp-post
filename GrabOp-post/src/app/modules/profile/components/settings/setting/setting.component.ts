
import { Component, Input, OnInit } from '@angular/core';

// Services
import { SettingsService } from '../../../services/settings.service';

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    @Input() setting: Models.Setting;
    private value: boolean;
    private accountId = 16;

    constructor(
        private settingsService: SettingsService
    ) { }

    ngOnInit() {
        if (this.setting.fieldtype == "bool") {
            this.value = (this.setting.value == "1") ? true : false;
        }
    }

    toggle() {
        let stringValue = this.value ? "1" : "0";
        this.settingsService.toggleSetting(this.accountId, this.setting.settingid, stringValue).subscribe(
            setting => {
                console.log(setting);
            }
        );
    }
}
