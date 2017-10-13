import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response, RequestOptions } from '@angular/http';

// Services
import { HttpService } from '../../account/services/http.service';

import { VOSettings } from '../../../models/vos';
import { mapGetPerson, mapUpdateProfileClientToServer } from '../../../utils/map-functions';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProfileService {

    private url: string;

    constructor(
        private http: HttpService
    ) {
        this.url = VOSettings.server + '/profiles/';
    }

    public getProfile(): Observable<Models.VOUserExt> {
        return this.http.get(VOSettings.myProfile).map(mapGetPerson);
    }

    public validateUrlProfile(id: number, router: Router): Observable<boolean> {
        return this.http.get(VOSettings.myProfile).map(res => {
            const myProfile = mapGetPerson(res);
            if (id == myProfile.id) {
                router.navigate(['/profile']);
                return false;
            }
            return true;
        });
    }

    public getProfileLocation(id: number, type: number): Observable<Models.ProfileLocation> {
        return this.http.get(this.url + id.toString() + '/location?format=json&type=' + type);
    }

    public getProfileById(id: string): Observable<Models.VOUserExt> {
        return this.http.get(VOSettings.profile.replace(<any>'{{id}}', id));
    }

    public updateProfile(person: Models.VOUserExt): Observable<Models.VOUserExt> {
        return this.http.put(VOSettings.updateProfile.replace(<any>'{{id}}', person.id.toString()), mapUpdateProfileClientToServer(person))
            .map(res => res);
    }

}
