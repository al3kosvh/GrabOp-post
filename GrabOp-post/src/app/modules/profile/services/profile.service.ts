import {Injectable} from '@angular/core';

// Services
import {AuthHttpService} from '../../account/services/auth-http.service';

import {VOSettings} from '../../../models/vos';
import {mapGetPerson} from '../../../utils/map-functions';
import {VOUserExt} from "../../account/models/vouser";

@Injectable()
export class ProfileService {

  constructor(private authHttpService: AuthHttpService) {
  }

  getProfileById(id: string, subscribe): void {
    subscribe = [
      subscribe[0] || (value => {}), subscribe[1] || (err => {}), subscribe[2] || (() => {})
    ];
    const urlProfilePerson = VOSettings.profile.replace(<any>'{{id}}', id);
    this.authHttpService.get(urlProfilePerson)
      .map(mapGetPerson)
      .share()
      .subscribe(subscribe[0], subscribe[1], subscribe[2]);
  }

  editProfile(person: VOUserExt, subscribe): void {
    subscribe = [
      subscribe[0] || (value => {}), subscribe[1] || (err => {}), subscribe[2] || (() => {})
    ];
    const urlProfilePerson = VOSettings.updateProfile.replace(<any>'{{id}}', person.id);
    this.authHttpService.post(urlProfilePerson, person)
      .map(res => res.json)
      .share()
      .subscribe(subscribe[0], subscribe[1], subscribe[2]);
  }

}
