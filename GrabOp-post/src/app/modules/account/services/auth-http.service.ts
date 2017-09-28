import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { VOSettings } from "../../../models/vos";
import { VOUserExt, VOUser, SOAuthenticateResponse, SOUser } from "../models/vouser";


@Injectable()
export class AuthHttpService {

    private headers: Headers;
    public isLogedIn: Observable<boolean>;
    private userSub: BehaviorSubject<VOUserExt>;

    public user$: Observable<VOUserExt>;
    private user: VOUserExt;

    constructor(
        private http: Http
    ) {

        //this.isLogedInSub = new BehaviorSubject(false);

        this.userSub = new BehaviorSubject<VOUserExt>(this.user);

        this.user$ = this.userSub.asObservable();

        this.isLogedIn = this.user$.map(user => {
            return true;
        }, error => {
            return false;
        });

        //this.autoLogin();
    }

    autoLogin(): void {

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

    }

    convertSessionToToken(): Observable<any> {
        let url: string = VOSettings.server + '/session-to-token?format=json';
        return this.http.post(url, {}).map(res => console.log('session-to-token: ', res));
    }

    signOut() {
        let url: string = VOSettings.server + '/auth/logout?format=json';
        this.get(url).map(res => res.json()).subscribe(response => {
            this.removeAuthentication();
        });
    }


    signIn(authData: Models.SignIn): Observable<VOUserExt> {

        let url: string = VOSettings.authenticateUrl;

        return this.post(url, authData).map(response => {
            let authResponse: SOAuthenticateResponse = response.json();

            console.log('AuthService - SignInResponse: ', authResponse);

            let user: VOUser = new VOUser();
            user.id = authResponse.user_id;
            user.sessionId = authResponse.session_id;
            user.displayName = authResponse.display_name;
            user.username = authData.username;
            user.password = authData.password;
            user.token = authResponse.session_id;
            //this.saveUser(user);
            return user;
        }).flatMap((user: VOUser) => {
            return this.getUserExtended().map((userExt: VOUserExt) => {
                this.saveUser(user);
                return userExt;
            });
        });
    }

    getUserExtended(): Observable<VOUserExt> {
        // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/profiles/me?format=json';
        let url: string = VOSettings.myProfile;
        return this.get(url)
            .map(response => {
                console.log('AuthService - GetUserExtended: ', response);
                let jsonResponse: any = response.json();
                let vouser: VOUser = this.mapUserExt(jsonResponse);
                this.userSub.next(vouser);
                this.saveUser(vouser);
                return vouser;
            });
    }

    private mapUserExt(user: SOUser): VOUserExt {
        //console.log('mapUserExt', user);
        return {
            id: user.id,
            userId: user.id,
            role: user.type,
            username: user.user_name,
            primaryEmail: user.primary_email,
            // emailVisible?: boolean;
            displayName: user.first_name,
            // token?: string;
            //isLogin?: boolean;
            firstName: user.first_name + ' ' + user.last_name,
            lastName: user.last_name
        }
    }

    handleError(error: any) {
        let errMsg = (error.statusText) ? error.statusText : 'Error';
        console.error('AuthService - HandleError: ', error);
        //return error;;
        return Observable.throw(errMsg);
    }


    private getUser(): VOUser {
        if (!this.user) {
            let str = localStorage.getItem('authentication');
            try {
                if (str) this.user = JSON.parse(atob(str));  //   new VOUser(JSON.parse(atob(str)));
            } catch (e) {
                this.removeAuthentication();
            }
        }
        return this.user;
    }

    saveUser(user: VOUser): void {
        localStorage.setItem('authentication', btoa(JSON.stringify(user)));
    }

    getToken(): string {
        let user: VOUser = this.getUser();
        return user ? user.token : null;
    }

    getHeaders(): Headers {
        if (!this.headers) {
            this.headers = new Headers();
            let token: string = this.getToken();
            // console.log('token' , token);

            if (token) {
                this.headers.append('Authorization', token);
                //this.headers.append('token', token);
            }
            // this.headers.append('withCredentials','true');
        }
        return this.headers;
    }

    removeAuthentication(): void {
        this.user = null;
        this.userSub.next(null);
        // this.isLogedInSub.next(false);
        //this.authenticatedSub.next(false);
        localStorage.removeItem('authentication');
    }


    addHeaders(options: RequestOptions): RequestOptions {
        if (options) options.headers ? options.headers.append('Authorization', this.getToken()) : options.headers = this.getHeaders();
        else options = new RequestOptions({ headers: this.getHeaders(), withCredentials: true });
        console.log('AuthService - Headers: ', JSON.stringify(options));
        return options;
    }

    public get(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.get(url, this.addHeaders(options));
    }

    public post(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.post(url, body, this.addHeaders(options));
    }

    public put(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.put(url, body, this.addHeaders(options));
    }

    public delete(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.delete(url, this.addHeaders(options));
    }

    public patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.patch(url, this.addHeaders(options));
    }

    public head(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.head(url, this.addHeaders(options));
    }

    public options(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.options(url, this.addHeaders(options));
    }


}
