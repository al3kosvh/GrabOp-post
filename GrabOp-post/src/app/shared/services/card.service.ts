
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { BehaviorSubject } from "rxjs";
import { VOSettings } from '../../models/vos';

@Injectable()
export class CardService {

    // private sub:Subject<VOUser>;
    // user$: Observable<VOUserExt>;
    // private userSub: Subject<VOUserExt>;
    // user: VOUserExt;

    //private __myProfile:VOUserExt;

    // _user:VOUserExt;
    // private userSub:BehaviorSubject<VOUserExt>;


    constructor(private http: Http) {

        // this.userSub = new BehaviorSubject<VOUserExt>(new VOUserExt({}));
        //this.user$= this.userSub.asObservable();
        // console.log('person service init');
        this.getUser();

    }

    getUser(): void {
        // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';

        /* var url:string =VOSettings.login+'/user';
         this.http.get(url)
             .map(res=>{return  new VOUser(res.json());})
             .catch((err)=>this.handleError(err)).subscribe(
             (res:any)=> {
                 this._user = res;
                 this.userSub.next(res);
 
             }
         )*/
    }
    /*
        saveUser():Promise<VOResult>{
            // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';
    
            var url:string = VOSettings.login+'/user';
            return  this.http.post(url,this._user).toPromise()
                .then(res=>{return  new VOResult(res.json());})
        }*/


    private handleError(error: any) {
        console.log(error);
        //this.id++;
        // if(this.id<1000) this.loadProfile();
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

}