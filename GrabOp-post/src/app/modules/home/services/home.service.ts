import { Injectable } from "@angular/core";

// Services
import { HttpService } from '../../account/services/http.service';

@Injectable()
export class HomeService {
    constructor(
        private http: HttpService
    ) { }
    getPosts(): any {
        //this.http.get()
    }
}
