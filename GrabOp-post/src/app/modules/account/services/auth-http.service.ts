import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';
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

        this.isLogedIn = this.user$.map(user => !!user);

        //this.autoLogin();
    }

    autoLogin(): void {

        let user: VOUser = this.getUser();
        //TODO if expired error
        console.log('autologin ', user);
        if (!this.user) {
            return;
        }

        this.getUsersExtended().subscribe(user => {
            console.log(user);
            this.user = user;
            this.userSub.next(this.user);
        });

    }

    convertSessionToToken() {

        let url: string = VOSettings.server + 'session-to-token?format=json';
        this.http.post(url, {}).toPromise().then(res => console.log('session-to-token:', res));
    }

    logout() {

        let url: string = VOSettings.server + '/auth/logout?format=json';
        console.log(url);
        this.get(url).map(res => res.json()).subscribe(res => {
            console.log(res);
            this.user = null;
            this.userSub.next(null);
        });
    }


    login(username: string, password: string): Observable<VOUserExt> {

        let sub: Subject<VOUserExt> = new Subject();

        // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/auth?format=json';
        let url: string = VOSettings.authenticateUrl;
        
        this.http.post(url, { username: username, password: password }).map(response => {
            let authResponse: SOAuthenticateResponse = response.json();            

            let user: VOUser = new VOUser();
            user.id = authResponse.user_id;
            user.sessionId = authResponse.session_id;
            user.displayName = authResponse.display_name;
            user.username = username;
            user.password = password;
            user.token = authResponse.session_id;
            return user;
            
        }).catch(this.handleError).subscribe(user => {
            ///TODO make sure user is valid
            //this.loginUser(user);
            console.log(user);
            this.saveUser(user);

            /*this.getUsersExtended().subscribe(
                user => {
                    sub.next(user);
                    this.userSub.next(user);
                }
            )*/

        });

        return sub.asObservable();

    }

    getUsersExtended() {
        // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/profiles/me?format=json';
        let url: string = VOSettings.myProfile;
        return this.get(url)
            .map(res => {
                //console.log(res);
                let r: any = res.json();
                let out: VOUser = this.mapUserExt(r);

                return out;
            })
            .catch(this.handleError)

    }


    private mapUserExt(user: SOUser): VOUser {
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
        console.error(error);
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

    getHeaders(): any {
        if (!this.headers) {
            this.headers = new Headers();
            let token: string = this.getToken();
            // console.log('token' , token);

            if (token) {
                this.headers.append('Authorization', token);
                // this.headers.append('token', token);
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


    addHeaders(options: any): any {
        if (options) options.headers ? options.headers.append('Authorization', this.getToken()) : options.headers = this.getHeaders();
        else options = { headers: this.getHeaders(), withCredentials: true };
        // console.log(options);
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
