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
        let url = VOSettings.connectionGetProfileConnectionsCount.replace(<any>'{{id}}', accountId.toString());
        return this.http.get(url)
            .map(res => {
                return res.count;
            })
            .catch(this.handleError);
    }

    setConnection(sender: number, receiver: number, message: string): Observable<any> {
        let url = VOSettings.connectionMakeRequest.replace(<any>'{{sender}}', sender.toString()).replace(<any>'{{receiver}}', receiver.toString());
        // TODO: post (http://grabop2api-dev.us-west-2.elasticbeanstalk.com/api/v1/json/metadata?op=Connection_MakeRequest)
        return this.http.post(url, { message: message })
            .map(res => {
                console.log('setConnection res', res);
                return res;
            })
            .catch(this.handleError);
    }

    confirmConnection(connectionId: number, accept: boolean): Observable<any> {
        let url = VOSettings.connectionConfirmConnection.replace(<any>'{{connectionid}}', connectionId.toString());
        return this.http.put(url, { connectionId: connectionId, accept: accept })
            .catch(this.handleError);
    }

    deleteConnection(connectionId: number): Observable<any> {
        let url = VOSettings.connectionDeleteConnection.replace(<any>'{{connectionid}}', connectionId.toString());
        return this.http.delete(url)
            .catch(this.handleError);
    }

    getMyConnections(): Observable<Models.VOConnection[]> {
        let url = VOSettings.connectionGetMyConnections;
        return this.http.get(url)
            .catch(this.handleError);
    }

    getProfileConnections(id: string): Observable<Models.VOConnection[]> {
        let url = VOSettings.connectionGetProfileConnections.replace(<any>'{{id}}', id);
        return this.http.get(url)
            .catch(this.handleError);
    }

    sendMessage(id: number, senderid: number, body: string, subject?: string): Observable<any> {
        let url = VOSettings.sendMessage.replace(<any>'{{id}}', id.toString());
        return this.http.post(url, { id, senderid, body, subject })
            .catch(this.handleError);
    }

    getMyConversation(): Observable<any> {
        return this.http.get(VOSettings.getMyConversation)
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
