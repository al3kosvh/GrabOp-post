
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

// Services
import { HttpService } from '../../account/services/http.service';

import { VOSettings } from '../../../models/vos';

@Injectable()
export class SettingsService {

    private url: string;

    constructor(
        private http: HttpService
    ) {
        this.url = VOSettings.server + '/profiles/';
    }

    public getSettings(accountId: string): Observable<Models.Setting[]> {
        return this.http.get(this.url + accountId + '/settings?format=json')
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public toggleSetting(accountId: number, settingId, value: string): Observable<Models.Setting> {
        return this.http.post(this.url + accountId + '/settings/' + settingId + '?format=json', { value })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}