import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AccountStorageService {

    user: BehaviorSubject<Models.VOUserExt> = new BehaviorSubject(null);
    token: BehaviorSubject<Models.Token> = new BehaviorSubject(null);

    constructor() {
        window.addEventListener("storage",
            event => {
                if (event.key.startsWith("user")) {
                    this.loadUser();
                    return;
                }
                if (event.key.startsWith("token")) {
                    this.loadToken();
                    return;
                }
            });
        this.loadUser();
        this.loadToken();
    }

    getUser(): Models.VOUserExt {
        let base64User: string = localStorage.getItem('user');
        if (base64User)
            return JSON.parse(atob(base64User));
        return null;
    }

    getToken(): Models.Token {
        let base64Token: string = localStorage.getItem('token');
        if (base64Token)
            return JSON.parse(atob(base64Token));
        return null;
    }

    setUser(user: Models.VOUserExt) {
        localStorage.setItem('user', btoa(JSON.stringify(user)));
        this.user.next(user);
    }

    setToken(token: Models.Token) {
        localStorage.setItem('token', btoa(JSON.stringify(token)));
        this.token.next(token);
    }

    clearStorage() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.user.next(null);
        this.token.next(null);
    }

    removeUser() {
        localStorage.removeItem('user');
        this.user.next(null);
    }

    removeToken() {
        localStorage.removeItem('token');
        this.token.next(null);
    }

    private loadUser() {
        this.user.next(this.getUser());
    }

    private loadToken() {
        this.token.next(this.getToken());
    }
}
