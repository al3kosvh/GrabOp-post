import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, RequestOptions } from '@angular/http';

// Services
import { HttpService } from '../../account/services/http.service';

import { VOAlliance, VOSettings } from '../../../models/vos';
import { mapGetPerson, mapUpdateProfileClientToServer } from '../../../utils/map-functions';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AllianceService {

    private url: string;

    constructor(
        private http: HttpService
    ) {
        this.url = VOSettings.server + '/profiles/';
    }

    public createAlliance(alliance: VOAlliance): Observable<VOAlliance> {
        return this.http.post(VOSettings.createAlliance, alliance);
    }

    public updateAlliance(alliance: VOAlliance): Observable<VOAlliance> {
        return this.http.put(VOSettings.updateAlliance, alliance);
    }

    public terminateAlliance(id: number): Observable<any> {
        return this.http.delete(VOSettings.terminateAlliance.replace(<any>'{{id}}', id.toString()));
    }

    public getAlliance(id: number): Observable<VOAlliance> {
        return this.http.get(VOSettings.getAlliance.replace(<any>'{{id}}', id.toString()));
    }

    public getMyAlliances(): Observable<VOAlliance[]> {
        return this.http.get(VOSettings.getMyAlliances);
    }

}
