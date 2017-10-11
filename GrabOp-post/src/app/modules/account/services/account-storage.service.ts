import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AccountStorageService {

    user: BehaviorSubject<Models.VOUserExt> = new BehaviorSubject(null);
    token: BehaviorSubject<Models.Token> = new BehaviorSubject(null);
    
    private storage;

    constructor() {

        this.defineStorage();

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
        let base64User: string = this.storage.getItem('user');
        if (base64User)
            return JSON.parse(atob(base64User));
        return null;
    }

    getToken(): Models.Token {
        let base64Token: string = this.storage.getItem('token');
        if (base64Token)
            return JSON.parse(atob(base64Token));
        return null;
    }

    setUser(user: Models.VOUserExt) {
        this.storage.setItem('user', btoa(JSON.stringify(user)));
        this.user.next(user);
    }

    setToken(token: Models.Token) {
        this.storage.setItem('token', btoa(JSON.stringify(token)));
        this.token.next(token);
    }

    clearStorage() {
        this.storage.removeItem('user');
        this.storage.removeItem('token');
        this.user.next(null);
        this.token.next(null);
    }

    removeUser() {
        this.storage.removeItem('user');
        this.user.next(null);
    }

    removeToken() {
        this.storage.removeItem('token');
        this.token.next(null);
    }

    remember(remember: boolean) {
        remember ? this.storage = localStorage : this.storage = sessionStorage;
    }

    private loadUser() {
        this.user.next(this.getUser());
    }

    private loadToken() {
        this.token.next(this.getToken());
    }

    private defineStorage() {
        this.remember(!!localStorage.getItem('token'));
    }
}
