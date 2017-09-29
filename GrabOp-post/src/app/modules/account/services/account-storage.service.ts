import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class LocalStorageService {

    user: BehaviorSubject<Models.VOUser> = new BehaviorSubject(null);
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

    getUser(): Models.VOUser {
        return JSON.parse(atob(localStorage.getItem('user')));
    }

    getToken(): Models.Token {
        return JSON.parse(atob(localStorage.getItem('token')));
    }

    setUser(user: Models.VOUser) {
        localStorage.setItem('user', btoa(JSON.stringify(user)));
        this.user.next(user);
    }

    setToken(token: Models.Token) {
        localStorage.setItem('user', btoa(JSON.stringify(token)));
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