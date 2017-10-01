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
                console.log('auth serv constr user: ', user);
                var isLoggedIn = user ? true : false;
                if (this.loggedIn.getValue() != isLoggedIn)
                    isLoggedIn ? this.router.navigate(['/']) : this.router.navigate(['/guest']);
                this.loggedIn.next(isLoggedIn);

            },
            error => {
                console.log('auth serv constr error', error);
            });
    }

    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    signOut(): Observable<Models.VOUser> {
        let url: string = VOSettings.signoutUrl;
        return this.http.get(url).map((response) => {
            this.storage.clearStorage();
            return this.mapAuthResponseToUser(response);
        });
    }

    signIn(authData: Models.SignIn): Observable<Models.VOUserExt> {
        let url: string = VOSettings.signinUrl;

        console.log('AuthService - SignIn');

        return this.http.post(url, authData).map(response => {
            let authResponse: Models.SOAuthenticateResponse = response;

            console.log('AuthService - SignInResponse: ', authResponse);

            let user: Models.VOUser = {
                id: authResponse.user_id,
                sessionId: authResponse.session_id,
                displayName: authResponse.display_name,
                username: authResponse.user_name,
                primaryEmail: "",
                firstName: "",
                lastName: "",
                token: authResponse.session_id
            }
            return user;
        }).flatMap((user: Models.VOUser) => {
            console.log('AuthService - SignIn flatMap');
            return this.getUserExtended().map((userExt: Models.VOUserExt) => {
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
                console.log('AuthService - GetUserExtended: ', response);
                let vouser: Models.VOUserExt = this.mapUserExtended(response);
                return vouser;
            });
    }

    private mapUserExtended(user: Models.SOUser): Models.VOUserExt {
        return {
            id: user.id,
            role: user.type,
            username: user.user_name,
            primaryEmail: user.primary_email,
            displayName: user.display_name,
            firstName: user.first_name,
            lastName: user.last_name
        }
    }

    private mapAuthResponseToUser(authResponse: Models.SOAuthenticateResponse): Models.VOUser {
        return {
            id: authResponse.user_id,
            sessionId: authResponse.session_id,
            displayName: authResponse.display_name,
            username: authResponse.user_name,
            primaryEmail: "",
            firstName: "",
            lastName: "",
            token: authResponse.session_id
        }
    }

    handleError(error: any) {
        let errMsg = (error.statusText) ? error.statusText : 'Error';
        console.error('AuthService - HandleError: ', error);
        return Observable.throw(errMsg);
    }


    getUser(): Observable<Models.VOUserExt> {
        console.log('auth serv getUser');
        return this.storage.user.asObservable();
    }

    saveUser(user: Models.VOUserExt): void {
        this.storage.setUser(user);
        this.storage.setToken({ value: user.token });
    }

}
