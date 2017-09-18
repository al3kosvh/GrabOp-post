import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

// Services
import { AuthHttpMy } from '../../services/auth-http';

@Injectable()
export class HomeService {
    constructor(
        private http: AuthHttpMy,
        private http2: Http
    ) { }
    getPosts(): any {
        //this.http.get()
    }
}