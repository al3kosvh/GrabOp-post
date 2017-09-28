import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { AuthHttpService } from '../../account/services/auth-http.service';

import { VOSettings } from '../../../models/vos';
import { mapGetPerson } from '../../../utils/map-functions';
import { VOUserExt } from "../../account/models/vouser";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProfileService {

    constructor(
        private authHttpService: AuthHttpService
    ) {
    }

    public getProfile(): Observable<VOUserExt> {
        return this.authHttpService.get(VOSettings.myProfile).map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public getProfileById(id: string): Observable<VOUserExt> {
        return this.authHttpService.get(VOSettings.profile.replace(<any>'{{id}}', id))
          .map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public editProfile(person: VOUserExt): Observable<VOUserExt> {
        return this.authHttpService.post(VOSettings.updateProfile.replace(<any>'{{id}}', person.id), person)
          .map(res => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}
