
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

// Services
import { AuthHttpService } from '../../account/services/auth-http.service';

import { VOSettings } from '../../../models/vos';

@Injectable()
export class SettingsService {

    private url: string;

    constructor(
        private authHttpService: AuthHttpService
    ) {
        this.url = VOSettings.server + '/profiles/';
    }

    public getSettings(accountId: string): Observable<Models.Setting[]> {
        return this.authHttpService.get(this.url + accountId + '/settings?format=json').map((response: Response) =>
            response.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public toggleSetting(accountId: number, settingId, value: string): Observable<Models.Setting> {
        return this.authHttpService.post(this.url + accountId + '/settings/' + settingId + '?format=json', { value })
            .map((response: Response) =>
                response.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}
