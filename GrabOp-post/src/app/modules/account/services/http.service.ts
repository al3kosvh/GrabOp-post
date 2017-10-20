import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//App Services
import { AccountStorageService } from './account-storage.service';
import { SnackBarService } from '../../shared/services/snackbar.service';


@Injectable()
export class HttpService {

    private headers: Headers;

    private errors = {
        '0': { reason: 'Conection error' },
        '400': { reason: 'Bad Request' },
        '401': { reason: 'Invalid authentication credentials' },
        '403': { reason: 'Forbidden' },
        '404': { reason: 'Not Found' },
        '405': { reason: 'Method Not Allowed' },
        '406': { reason: 'Not Acceptable' },
        '407': { reason: 'Proxy Authentication Required' },
        '408': { reason: 'Request Timeout' },
        '409': { reason: 'Conflict' },
        '410': { reason: 'Gone' },
        '411': { reason: 'Length Required' },
        '412': { reason: 'Precondition Failed' },
        '413': { reason: 'Request Entity Too Large' },
        '414': { reason: 'Request URI Too Long' },
        '415': { reason: 'Unsupported Media Type' },
        '422': { reason: 'Unprocessable Entity' },
        '429': { reason: 'Too Many Requests' },
        '500': { reason: 'Internal Server Error' },
        '501': { reason: 'Not Implemented' },
        '502': { reason: 'Bad Gateway' },
        '503': { reason: 'Service Unavailable' },
        '504': { reason: 'Gateway Timeout' },
        '511': { reason: 'Network Authentication Required' }
    };

    constructor(
        private http: Http,
        private storage: AccountStorageService,
        private snackBarService: SnackBarService
    ) {
        this.setHeaders();
    }

    private getToken(): Observable<Models.Token> {
        return this.storage.token.asObservable();
    }

    private setHeaders() {
        this.getToken().subscribe((token: Models.Token) => {
            this.headers = new Headers();
            if (token) {
                this.headers.append('Authorization', token.value);
            }
        });
    }

    private getHeaders(options: RequestOptions): RequestOptions {
        if (options) {
            options.headers ? options.headers.append('Authorization', this.headers.get('Authorization')) : options.headers = this.headers;
        }
        else {
            options = new RequestOptions({ headers: this.headers, withCredentials: true });
        }
        return options;
    }

    public get(url: string, options?: RequestOptions): Observable<any> {
        console.log('Someone make a GET request: ', url);
        return this.http.get(url, this.getHeaders(options))
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    public post(url: string, body: any, options?: RequestOptions): Observable<any> {
        console.log('Someone make a POST request: ', url);
        return this.http.post(url, body, this.getHeaders(options))
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    public put(url: string, body: any, options?: RequestOptions): Observable<any> {
        return this.http.put(url, body, this.getHeaders(options))
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    public delete(url: string, options?: RequestOptions): Observable<any> {
        return this.http.delete(url, this.getHeaders(options))
            .map(response => response.json())
            .catch(error => this.handleError(error));
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

    private handleError(error: any) {

        let reason: Models.Notification = { message: "", action: 'Close' };

        if (typeof error._body == 'string') {
            let body = JSON.parse(error._body);
            reason.message = body.response_status.message;
        } else {
            reason.message = this.errors[error.status].reason;
        }

        this.snackBarService.showMessage(reason);
        return Observable.create(error);
    }
}
