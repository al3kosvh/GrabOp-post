import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AccountStorageService } from './account-storage.service';
import { HttpService } from './http.service';

import { VOSettings } from "../../../models/vos";
import { mapUserExtended, mapAuthResponseToUser } from "../../../utils/map-functions";



@Injectable()
export class AuthenticationService {

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private http: HttpService,
        private storage: AccountStorageService,
        private router: Router
    ) {
        this.getUser().subscribe(
            user => {
                var isLoggedIn = user ? true : false;
                if (this.loggedIn.getValue() != isLoggedIn)
                    isLoggedIn ? this.router.navigate(['/home']) : this.router.navigate(['/guest']);

                this.loggedIn.next(isLoggedIn);
            });
    }

    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    signOut(): Observable<any> {
        let url: string = VOSettings.signoutUrl;
        return this.http.get(url).map((response) => {
            this.storage.clearStorage();
            return mapAuthResponseToUser(response);
        });
    }

    signIn(authData: Models.SignIn): Observable<Models.VOUserExt> {
        let url: string = VOSettings.signinUrl;

        return this.http.post(url, authData).map(response => {
            let authResponse: Models.SOAuthenticateResponse = response;

            let user: Models.VOUser = {
                id: authResponse.user_id,
                sessionId: authResponse.session_id,
                displayName: authResponse.display_name,
                username: authResponse.user_name,
                primaryEmail: "",
                firstName: "",
                lastName: "",
                token: { value: authResponse.session_id }
            }
            return user;
        }).flatMap((user: Models.VOUser) => {
            return this.getUserExtended().map((userExt: Models.VOUserExt) => {
                userExt.token = { value: user.sessionId };
                this.saveUser(userExt);
                return userExt;
            });
        });
    }

    getUserExtended(): Observable<Models.VOUserExt> {
        // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/profiles/me?format=json';
        let url: string = VOSettings.myProfile;
        return this.http.get(url)
            .map(response => {
                let vouser: Models.VOUserExt = mapUserExtended(response);
                return vouser;
            });
    }

    handleError(error: any) {
        let errMsg = (error.statusText) ? error.statusText : 'Error';
        return Observable.throw(errMsg);
    }


    getUser(): Observable<Models.VOUserExt> {
        return this.storage.user.asObservable();
    }

    saveUser(user: Models.VOUserExt): void {
        this.storage.setUser(user);
        this.storage.setToken(user.token);
    }

}
