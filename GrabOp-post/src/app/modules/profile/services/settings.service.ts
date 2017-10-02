
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

    public toggleSetting(accountId: string, settingId: number, value: string): Observable<Models.Setting> {
        return this.http.put(this.url + accountId + '/settings/' + settingId + '?format=json', { value: value })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public changePassword(accountId: string, changeUserPassword: Models.ChangeUserPassword): Observable<Models.ChangeUserPassword> {
        return this.http.put(this.url + accountId + '/password/?format=json', changeUserPassword)
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
