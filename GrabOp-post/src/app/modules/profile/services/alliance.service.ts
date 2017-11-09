import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, RequestOptions } from '@angular/http';

// Services
import { HttpService } from '../../account/services/http.service';

import { VOSettings } from '../../../models/vos';
import { mapGetPerson, mapUpdateProfileClientToServer } from '../../../utils/map-functions';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AllianceService {

    constructor(
        private http: HttpService
    ) { }

    public createAlliance(alliance: Models.Alliance): Observable<Models.AllianceExtended> {
        return this.http.post(VOSettings.createAlliance, alliance);
    }

    public updateAlliance(alliance: Models.AllianceExtended): Observable<Models.AllianceExtended> {
        return this.http.put(VOSettings.updateAlliance, alliance);
    }

    public terminateAlliance(id: number): Observable<any> {
        return this.http.delete(VOSettings.terminateAlliance.replace(<any>'{{id}}', id.toString()));
    }

    public getAlliance(id: number): Observable<Models.AllianceExtended> {
        return this.http.get(VOSettings.getAlliance.replace(<any>'{{id}}', id.toString()));
    }

    public getMyAlliances(): Observable<Models.AllianceExtended[]> {
        return this.http.get(VOSettings.getMyAlliances);
    }

}
