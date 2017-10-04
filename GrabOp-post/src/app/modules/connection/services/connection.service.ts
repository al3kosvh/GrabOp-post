import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { VOSettings } from "../../../models/vos";
import { HttpService } from "../../account/services/http.service";
import { Router } from "@angular/router";
import { mapGetPerson } from "../../../utils/map-functions";

@Injectable()
export class ConnectionService {

  constructor(private http: HttpService) {
  }

  getProfileConnectionsCount(id: string): Observable<number> {
    let url = VOSettings.connection_GetProfileConnectionsCount.replace(<any>'{{id}}', id);
    return this.http.get(url)
      .map(res => {
        return res.count;
      })
      .catch(this.handleError);
  }

  setConnection(sender: string, receiver: string, message: string): Observable<Models.VOConnectionRequest> {
    let url = VOSettings.connection_MakeRequest.replace(<any>'{{sender}}', sender).replace(<any>'{{receiver}}', receiver);
    // TODO: post (http://grabop2api-dev.us-west-2.elasticbeanstalk.com/api/v1/json/metadata?op=Connection_MakeRequest)
    return this.http.post(url, {message: message})
      .catch(this.handleError);
  }

  confirmConnection(sender: string, receiver: string, connectionId: number, confirmer: number, accept: boolean): Observable<Models.VOConnectionRequest> {
    let url = VOSettings.connection_MakeRequest.replace(<any>'{{sender}}', sender).replace(<any>'{{receiver}}', receiver);
    return this.http.post(url, {accept: accept, connectionid: connectionId, confirmer})
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

  sendMessage(id: string, senderid: string, body: string, subject?: string): Observable<any> {
    let url = VOSettings.sendMessage.replace(<any>'{{id}}', id);
    return this.http.post(url, {id, senderid, body, subject})
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      console.error(error);
    return Observable.throw(errMsg);
  }

  public validateUrlProfile(id: string, router: Router): Observable<boolean> {
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
