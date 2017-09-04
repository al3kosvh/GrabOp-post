/**
 * Created by Vlad on 9/9/2016.
 */

import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, URLSearchParams,} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { VOSettings, VOResult, VOProfileSettings} from "../../models/vos";
import {FormControl} from "@angular/forms";
import {SOAuthenticate, SOAuthenticateResponse, SOResponseStatus, SORegister, SORegisterResponse} from "../../models/sos";
import {VOUser, VOUserExt} from '../vouser';
import {AuthHttpMy} from '../../services/auth-http';
import {Router} from '@angular/router';


@Injectable()
export class LoginNewService {


  // userExt:VOUserExt = new VOUserExt({});

    constructor(public http: Http) {

      // http.user$.subscribe(res=>this.userExt = res);
    }

    /*isUserExists(value: any, column: string): Promise<VOResult> {

        var url: string = VOSettings.login + '/exists/' + column;
        return this.http.post(url, value).toPromise().then(
            res => {
                return new VOResult(res.json())
            }
        )
    }*/

 /* register(newUser: VOUserExt): Observable<VOUserExt> {
    // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/register?format=json';
    let url: string = VOSettings.register;;

    return this.http.post(url, newUser).map(res => {
      console.log('register post res ', res);
      let resp: SOAuthenticateResponse = res.json();

      let user: VOUser = new VOUser();
        user.id = resp.UserId;
        user.username = newUser.username;
        user.password = newUser.password;
      return user;
    }).catch(this.handleError);
  }*/

  verifyEmail(token: string){
    // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/verifyemail?format=json';
    let url: string = VOSettings.verifyemail;

    return this.http.post(url, token).map(res => {
      console.log('verifyEmail post res ', res);
      return res;
    }).catch(this.handleError);
  }


  // confirmPassword(password: string, ctrl: FormControl) {
    //
    //     return password === ctrl.value ? null : {confirmPassword: false};
    //
    // }

    // createAccount(account: VOUserExt): Promise<VOUserExt | VOResult> {
    //     let req: SORegister = new SORegister({});
    //         req.UserName = account.username;
    //         req.FirstName = account.firstName;
    //         req.LastName = account.lastName;
    //         req.Email = account.primaryEmail;
    //         req.Password = account.password;
    //
    //     // this.account = account;
    //     // let url: string = VOSettings.login + '/create';
    //     let url: string = VOSettings.server + VOSettings.register + VOSettings.format_json;
    //     // console.log(url, account);
    //     return this.http.post(url, req).toPromise()
    //         .then(resp => {
    //             console.log('resp', resp.json());
    //             let res: SORegisterResponse = resp.json();
    //             let out: VOUserExt = new VOUserExt({});
    //                 out.id = +res.UserId;
    //                 out.username = res.UserName;
    //                 out.sessionId = res.SessionId;
    //             return out;
    //         }, err => {
    //             console.log('error!!! ', err.json());
    //             let regRes: SORegisterResponse = new SORegisterResponse(err.json());
    //             let res: SOResponseStatus = regRes.ResponseStatus;
    //             let out: VOResult = new VOResult({});
    //                 out.error = res.ErrorCode;
    //                 out.message = res.Message;
    //             // console.log('error!!! ', out);
    //             return out;
    //         })
    // }

    // login(account:VOAccount):Promise<VOResult>{
    //     this.account = account;
    //     var url:string = VOSettings.login+'/auth';
    //     console.log(url,account);
    //     return  this.http.post(url,account).toPromise()
    //         .then(resp=>{
    //             return   new VOResult(resp.json());
    //
    //         })
    // }

    // getSettings(model:VOAccountSettings):Observable<VOAccountSettings>{
    //     return this.http.get('server/get_icons3.php').map((res:any)=>{
    //         return new VOIcons(res.json());
    //     });
    // }

    handleError(error: any) {
        console.log(error);
        //this.id++;
        // if(this.id<1000) this.loadProfile();
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

}
