import { Injectable, EventEmitter } from '@angular/core';
//import { Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy, ResponseContentType } from '@angular/http';

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
        private storage: AccountStorageService
    ) {
        //this.isLogedInSub = new BehaviorSubject(false);

        //this.userSub = new BehaviorSubject<VOUserExt>(this.user);

        //this.user$ = this.userSub.asObservable();

        //this.isLoggedIn = this.user$.map(user => !!user);

        //this.isLoggedIn = this.getUser().map(user => !!user);
        console.log('auth serv constr');

        this.getUser().subscribe(
            user => {
                console.log('auth serv constr user', user);
                var isLoggedIn = user ? true : false;
                //if (this.loggedIn.getValue() != isLoggedIn) {
                //isLoggedIn ? this.router.navigate(['/']) : this.router.navigate(['/signin']);
                this.loggedIn.next(isLoggedIn);
                //}
            },
            error => {
                console.log('auth serv constr error', error);
            });
        //this.autoLogin();
    }

    isLoggedIn(): Observable<boolean> {
        console.log('auth serv isloggedin');
        return this.loggedIn.asObservable();
    }

    /*autoLogin(): void {

        let user: VOUser = this.getUser();
        //TODO if expired error
        console.log('AuthService - Autologin: ', user);
        if (!this.user) {
            return;
        }

        this.getUserExtended().subscribe(user => {
            this.user = user;
            this.userSub.next(this.user);
        });

    }*/

    signOut() {
        let url: string = VOSettings.server + '/auth/logout?format=json';
        this.http.get(url).map(res => res.json()).subscribe(response => {
            this.storage.clearStorage();
        });
    }


    signIn(authData: Models.SignIn): Observable<Models.VOUserExt> {

        let url: string = VOSettings.authenticateUrl;

        return this.http.post(url, authData).map(response => {
            let authResponse: Models.SOAuthenticateResponse = response.json();

            console.log('AuthService - SignInResponse: ', authResponse);

            let user: Models.VOUser = {
                id: authResponse.user_id,
                sessionId: authResponse.session_id,
                displayName: authResponse.display_name,
                username: authData.username,
                password: authData.password,
                primaryEmail: "",
                firstName: "",
                lastName: "",
                token: authResponse.session_id
            }
            return user;
        }).flatMap((user: Models.VOUser) => {
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
                let jsonResponse: any = response.json();
                let vouser: Models.VOUserExt = this.mapUserExt(jsonResponse);
                return vouser;
            });
    }

    private mapUserExt(user: Models.SOUser): Models.VOUserExt {
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
