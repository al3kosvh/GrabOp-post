import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Response } from '@angular/http';

// Services
import { HttpService } from '../../account/services/http.service';

import { VOSettings } from '../../../models/vos';
import { mapGetPerson, mapUpdateProfileClientToServer } from '../../../utils/map-functions';
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

    public validateUrlProfile(id: string, router: Router): Observable<boolean> {
        return this.http.get(VOSettings.myProfile).map(res => {
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
        return this.http.get(VOSettings.profile.replace(<any>'{{id}}', id))
          .map(mapGetPerson)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public editProfile(person: VOUserExt): Observable<VOUserExt> {
        return this.http.post(VOSettings.updateProfile.replace(<any>'{{id}}', person.id),  mapUpdateProfileClientToServer(person))
          .map(res => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}
