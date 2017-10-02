
import { Injectable } from '@angular/core';

// Services
import { SnackBarService } from './snackbar.service';

@Injectable()
export class ErrorService {

    constructor(
        private snackBarService: SnackBarService
    ) { }

    resolve(error) {
        let reason;
        switch (error.status) {
            case 401: { reason = "Unauthorised need to refresh token"; break }
            case 400: {
                //console.log(error);
                if (typeof error._body === 'string') {
                    try {
                        let obj = JSON.parse(error._body);
                        let keys = Object.keys(obj);
                        if (typeof obj[keys[0]] === 'object') {
                            if (obj[keys[0]].message) {
                                reason = obj[keys[0]].message
                            } else {
                                reason = obj[keys[0]]
                            }
                        }
                        //else if (obj.error_description && obj[keys[1]]) {
                        //    reason = obj[keys[1]];
                        //} else {
                        //    reason = obj[keys[0]];
                        //}
                    } catch (e) {
                        if (e instanceof SyntaxError)
                            reason = error._body;
                    }
                }
                break
            }
            case 500: {
                if (typeof error._body === 'string') {
                    try {
                        let obj = JSON.parse(error._body);
                        let keys = Object.keys(obj);
                        if (typeof obj[keys[0]] === 'object') {
                            if (obj[keys[0]].message) {
                                reason = obj[keys[0]].message
                            } else {
                                reason = obj[keys[0]]
                            }
                        }
                        //else if (obj.error_description && obj[keys[1]]) {
                        //    reason = obj[keys[1]];
                        //} else {
                        //    reason = obj[keys[0]];
                        //}
                    } catch (e) {
                        if (e instanceof SyntaxError)
                            reason = error._body;
                    }
                }
                break }

        }
        this.snackBarService.show(reason, 'Error');
    }
}
