import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Response } from '@angular/http';

// Services
import { AuthHttpService } from '../../account/services/auth-http.service';

import { VOSettings } from '../../../models/vos';
import { mapGetPerson, mapUpdateProfileClientToServer } from '../../../utils/map-functions';
import { VOUserExt } from "../../account/models/vouser";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProfileService {

    constructor(
        private authHttpService: AuthHttpService
    ) { }

    public getProfile(): Observable<VOUserExt> {
        return this.authHttpService.get(VOSettings.myProfile).map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public validateUrlProfile(id: string, router: Router): Observable<boolean> {
        return this.authHttpService.get(VOSettings.myProfile).map(res => {
          const myProfile = mapGetPerson(res);
          if (id == myProfile.id) {
            router.navigate(['/profile']);
            return false;
          }
          return true;
        })
        .catch((error: any) => {
          return new Observable<boolean>();
        });
    }

    public getProfileById(id: string): Observable<VOUserExt> {
        return this.authHttpService.get(VOSettings.profile.replace(<any>'{{id}}', id))
          .map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public editProfile(person: VOUserExt): Observable<VOUserExt> {
        return this.authHttpService.post(VOSettings.updateProfile.replace(<any>'{{id}}', person.id), mapUpdateProfileClientToServer(person))
          .map(res => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}
