
import { Injectable } from '@angular/core';

// Services
import { SnackBarService } from './snackbar.service';

@Injectable()
export class HttpErrorService {

    constructor(
        private snackBarService: SnackBarService
    ) { }

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

    resolve(error): string {
        console.log('HttpErrorService: ',error);
        let reason = this.errors[error.status];
        if (!reason) reason = error.statusText;
        this.snackBarService.show(reason, 'Error');
        return reason;
    }
}
