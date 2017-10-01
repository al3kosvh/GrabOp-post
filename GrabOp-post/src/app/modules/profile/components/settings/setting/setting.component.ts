
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
    private userId: string;

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
        if (this.setting.fieldtype == "bool") {
            this.value = (this.setting.value == "1") ? true : false;
        }
    }

    toggle() {
        let stringValue = !this.value ? "1" : "0";
        
        console.log(stringValue);
        this.settingsService.toggleSetting(this.userId, this.setting.settingid, stringValue).subscribe(
            setting => {
                console.log(setting);
            }
        );
    }
}