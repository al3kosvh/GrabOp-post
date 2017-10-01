import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { HttpService } from '../../account/services/http.service';

import { VOSettings } from '../../../models/vos';
import { mapGetPerson } from '../../../utils/map-functions';
import { VOUserExt } from "../../account/models/vouser";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProfileService {

    constructor(
        private http: HttpService
    ) {
    }

    public getProfile(): Observable<VOUserExt> {
        return this.http.get(VOSettings.myProfile).map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public getProfileById(id: string): Observable<VOUserExt> {
        return this.http.get(VOSettings.profile.replace(<any>'{{id}}', id))
          .map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public editProfile(person: VOUserExt): Observable<VOUserExt> {
        return this.http.post(VOSettings.updateProfile.replace(<any>'{{id}}', person.id), person)
          .map(res => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}
