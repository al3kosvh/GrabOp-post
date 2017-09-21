import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Services
import { AuthHttpService } from '../../account/services/auth-http.service';

import { VOSettings } from '../../../models/vos';
import { VOUserExt } from '../../account/models/vouser';
import { mapGetPerson } from '../../../utils/map-functions';

@Injectable()
export class ProfileService {

    person$: Observable<VOUserExt>;
    private personSub: BehaviorSubject<VOUserExt>;
    private person: VOUserExt = new VOUserExt();

    myPerson$: Observable<VOUserExt>;
    private myPersonSub: BehaviorSubject<VOUserExt>;
    private myPerson: VOUserExt = new VOUserExt();

    constructor(
        private http: AuthHttpService
    ) {
        this.personSub = new BehaviorSubject(new VOUserExt());
        this.person$ = this.personSub.asObservable();

        // this.getProfileById();
    }

    getProfileById(id: string): void {
        let url = VOSettings.profile.replace(<any>'{{id}}', id);
        this.http.get(url)
            // .map(res => {
            //   return new VOUserExt(res.json());
            // })
            .map(mapGetPerson)
            .subscribe(result => {
                this.person = result;
                this.personSub.next(result);
                console.log('getProfileById', result);
            })
        // .catch(this.handleError)
    }

    getMyProfile(): void {
        let url = VOSettings.myProfile;
        this.http.get(url)
            // .map(res => {
            //   return new VOUserExt(res.json());
            // })
            .map(mapGetPerson)
            .subscribe(result => {
                this.person = result;
                this.personSub.next(result);
                console.log('getMyProfile', result);
            })
        // .catch(this.handleError)
    }

    // getProfile():void{
    //
    //   let url = VOSettings.myProfile;
    //   this.http.get(url).map(res=>{
    //     return res.json()
    //
    //   }).subscribe(res=>{
    //     console.log(res);
    //   })
    // }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }
}