
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Services
import { SettingsService } from '../../../services/settings.service';

@Component({
    selector: 'setting-slider',
    templateUrl: './setting-slider.component.html',
    styleUrls: ['./setting-slider.component.css']
})
export class SettingSliderComponent implements OnInit {

    @Input() setting: Models.Setting;
    value: number;
    userId: string;
    thumbLabel = true;

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
        if (this.setting.field_type == "number") {
            this.value = Number.parseInt(this.setting.value);
        }
    }

    onChange() {
        let stringValue = this.value.toString();

        this.settingsService.toggleSetting(this.userId, this.setting.setting_id, stringValue).subscribe(
            setting => {
                //console.log(setting);
            }
        );
    }
}
