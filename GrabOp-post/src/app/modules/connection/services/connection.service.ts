import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VOSettings } from '../../../models/vos';
import { HttpService } from '../../account/services/http.service';

@Injectable()
export class ConnectionService {

    constructor(
        private http: HttpService
    ) {
        console.log('ConnectionService');
        this.getMyConnections();
    }

    getProfileConnectionsCount(id: string): Observable<number> {
        let url = VOSettings.connection_GetProfileConnectionsCount.replace(<any>'{{id}}', id);
        return this.http.get(url)
            .map(res => {
                console.log('getProfileConnectionsCount', res);
                return res.count;
            })
            .catch(this.handleError);
    }

    setConnection(sender: string, receiver: string, message: string) {
        let url = VOSettings.connection_MakeRequest.replace(<any>'{{sender}}', sender).replace(<any>'{{receiver}}', receiver);
        // TODO: post (http://grabop2api-dev.us-west-2.elasticbeanstalk.com/api/v1/json/metadata?op=Connection_MakeRequest)
        this.http.post(url, { message: message })
            .map(res => {
                console.log('setConnection res', res);
                return res;
            })
            // .catch(this.handleError)
            .subscribe(result => {
                console.log('setConnection', result);
            })
    }

    getMyConnections(): Observable<number> {
        let url = VOSettings.connection_GetMyConnections;
        console.log('getMyConnections', url);
        return this.http.get(url)
            .map(res => {
                console.warn('getMyConnections', res);
                return res.count;
            })
            .catch(this.handleError);
    }

    getProfileConnections(id: string): Observable<number> {
        let url = VOSettings.connection_GetProfileConnections.replace(<any>'{{id}}', id);
        return this.http.get(url)
            .map(res => {
                console.log('getProfileConnections', res);
                return res.count;
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }
}
