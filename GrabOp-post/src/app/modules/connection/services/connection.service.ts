import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { VOSettings } from '../../../models/vos';
import { HttpService } from '../../account/services/http.service';

import { mapGetPerson } from '../../../utils/map-functions';

@Injectable()
export class ConnectionService {

    constructor(
        private http: HttpService
    ) { }

    getProfileConnectionsCount(accountId: number): Observable<number> {
        let url = VOSettings.connection_GetProfileConnectionsCount.replace(<any>'{{id}}', accountId.toString());
        return this.http.get(url)
            .map(res => {
                return res.count;
            })
            .catch(this.handleError);
    }

    setConnection(sender: number, receiver: number, message: string): Observable<any> {
        let url = VOSettings.connection_MakeRequest.replace(<any>'{{sender}}', sender.toString()).replace(<any>'{{receiver}}', receiver.toString());
        // TODO: post (http://grabop2api-dev.us-west-2.elasticbeanstalk.com/api/v1/json/metadata?op=Connection_MakeRequest)
        return this.http.post(url, { message: message })
            .map(res => {
                console.log('setConnection res', res);
                return res;
            })
            .catch(this.handleError);
    }

    confirmConnection(sender: number, receiver: number, connectionId: number, confirmer: number, accept: boolean): Observable<any> {
        // TODO api url to make a connection request on profile and confirm request, is the same with different params, but not working
        let url = VOSettings.connection_MakeRequest.replace(<any>'{{sender}}', sender.toString()).replace(<any>'{{receiver}}', receiver.toString());
        return this.http.post(url, { accept: accept, connectionid: connectionId, confirmer })
            .map(res => {
                console.log('connectionState res', res);
                return res.json();
            })
            .catch(this.handleError);
    }

    getMyConnections(): Observable<Models.VOConnection[]> {
        let url = VOSettings.connection_GetMyConnections;
        console.log('getMyConnections', url);
        return this.http.get(url)
            .catch(this.handleError);
    }

    getProfileConnections(id: string): Observable<Models.VOConnection[]> {
        let url = VOSettings.connection_GetProfileConnections.replace(<any>'{{id}}', id);
        return this.http.get(url)
            .catch(this.handleError);
    }

    sendMessage(id: number, senderid: number, body: string, subject?: string): Observable<any> {
        let url = VOSettings.sendMessage.replace(<any>'{{id}}', id.toString());
        return this.http.post(url, { id, senderid, body, subject })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

    public validateUrlProfile(id: number, router: Router): Observable<boolean> {
        return this.http.get(VOSettings.myProfile).map(res => {
            const myProfile = mapGetPerson(res);
            if (id == myProfile.id) {
                router.navigate(['/connections']);
                return false;
            }
            return true;
        })
            .catch((error: any) => {
                return new Observable<boolean>();
            });
    }

}
