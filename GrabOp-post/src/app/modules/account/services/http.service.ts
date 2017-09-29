import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AccountStorageService } from './account-storage.service';

@Injectable()
export class HttpService {

    private headers: Headers;

    constructor(
        private http: Http,
        private storage: AccountStorageService
    ) {
        this.setHeaders();
    }

    private getToken(): Observable<Models.Token> {
        return this.storage.token.asObservable();
    }

    private setHeaders() {
        this.getToken().subscribe((token: Models.Token) => {
            this.headers = new Headers();
            this.headers.append('Authorization', token.value);
        });
    }

    private getHeaders(options: RequestOptions): RequestOptions {
        if (options) {
            options.headers ? options.headers.append('Authorization', this.headers.get('Authorization')) : options.headers = this.headers;
        }
        else {
            options = new RequestOptions({ headers: this.headers, withCredentials: true });
        }
        console.log('AuthService - Headers: ', JSON.stringify(options));
        return options;
    }

    public get(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.get(url, this.getHeaders(options));
    }

    public post(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.post(url, body, this.getHeaders(options));
    }

    public put(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.put(url, body, this.getHeaders(options));
    }

    public delete(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.delete(url, this.getHeaders(options));
    }

    public patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.patch(url, this.getHeaders(options));
    }

    public head(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.head(url, this.getHeaders(options));
    }

    public options(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.options(url, this.getHeaders(options));
    }


}
