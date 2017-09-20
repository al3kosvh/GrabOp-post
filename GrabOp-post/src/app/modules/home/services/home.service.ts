import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

// Services
import { AuthHttpService } from '../../account/services/auth-http.service';

@Injectable()
export class HomeService {
    constructor(
        private http: AuthHttpService,
        private http2: Http
    ) { }
    getPosts(): any {
        //this.http.get()
    }
}
