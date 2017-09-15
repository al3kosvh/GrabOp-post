/**
 * Created by Vlad on 12/24/2016.
 */
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AuthHttpMy } from '../services/auth-http';

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