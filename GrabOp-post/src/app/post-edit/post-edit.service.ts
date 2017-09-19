import { Injectable, EventEmitter } from '@angular/core';
import {
    Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy,
    ResponseContentType,
} from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { VOSettings, VOService, VOResult, VOPost, VOImage, VOCategory, VOSearch } from '../models/vos';
import { BehaviorSubject } from 'rxjs';
// import {SONeed_CreateNeed, SONeed_UpdateNeed, SOOffer_CreateOffer, SOOffer_UpdateOffer} from '../models/sos';
import { VOUserExt } from '../modules/account/models//vouser';

import {
    mapGetPost,
    mapPostSend_CreateNeed, mapPostSend_CreateOffer, mapPostSend_UpdateNeed,
    mapPostSend_UpdateOffer
} from '../utils/map-functions';

import { AuthHttpMy } from '../services/auth-http';
import { MyPostsService } from '../services/my-posts.service';


@Injectable()
export class PostEditService {

    post$: Observable<VOPost>;
    private postSub: Subject<VOPost>;

    constructor(
        private http: AuthHttpMy,
        private myPostsService: MyPostsService
    ) {

        this.postSub = new Subject<VOPost>();
        this.post$ = this.postSub.asObservable();
        // this.get_AllPosts();
        // console.log('PostsEditService');

        //this.myServicesSubject = new Subject<VOService[]>();
        //this.getMyPosts = this.myServicesSubject.asObservable();

        //.myServiceSubject = new Subject<VOService>();
        //this.myService = this.myServiceSubject.asObservable();
        // this.loadServices();
    }

    setPost(post: VOPost): void {
        if (post) this.postSub.next(post);
    }

    updatePost(post: VOPost): Observable<VOPost> {
        // var url:string = VOSettings.server+'/post/'+post.id;
        // let url: string = VOSettings.myposts;
        console.log('updatePost post: ', post);

        let postType: string = post.type;
        // delete post.type;
        let url: string;

        let reqData: any;

        if (postType == 'need') {
            reqData = mapPostSend_UpdateNeed(post);
            url = VOSettings.updateNeedPost.replace(<any>'{{id}}', post.id.toString());
            // url = VOSettings.server + VOSettings.posts + VOSettings.need + post.id + VOSettings.format_json;
        } else if (postType == 'offer') {
            reqData = mapPostSend_UpdateOffer(post);
            url = VOSettings.updateOfferPost.replace(<any>'{{id}}', post.id.toString());
            // url = VOSettings.server + VOSettings.posts + VOSettings.offer + post.id + VOSettings.format_json;
        }
        // let rand = 1 + Math.random() * (48 - 1);
        // rand = Math.round(rand);
        //  req.summary = post.description;
        // req.categoryid = Math.round(rand);
        // req.latitude = 43;
        //req.longitude = -79;

        console.log('updatePost url: ', url);
        console.log('updatePost reqData: ', reqData);

        return this.http.put(url, reqData)
            // .map((res: Response) => {
            //   console.log('updatePost res',res);
            //   return res.json();
            // })
            .map(mapGetPost)
            .catch(this.handleError);
    }

    insertPost(post: VOPost): Observable<VOPost> {
        // var url:string = VOSettings.server+'/post/'+post.id;
        // var url: string = VOSettings.myposts;
        console.log('insertPost post: ', post);

        let postType: string = post.type;
        // delete post.type;
        let url: string;

        post.categoryid = 1;
        let reqData: any;
        // let req = {};

        if (postType == 'need') {
            reqData = mapPostSend_CreateNeed(post);
            url = VOSettings.createNeedPost;
            // url = VOSettings.server + VOSettings.posts + VOSettings.need + VOSettings.format_json;
        } else if (postType == 'offer') {
            reqData = mapPostSend_CreateOffer(post);
            url = VOSettings.createOfferPost;
            // url = VOSettings.server + VOSettings.posts + VOSettings.offer + VOSettings.format_json;
        }
        // let rand = 1 + Math.random() * (48 - 1);
        // req.summary = post.description;
        //req.categoryid = Math.round(rand);
        // req.latitude = 43;
        // req.longitude = -79;

        // req.email = this._user.PrimaryEmail;
        // req.phone = this._user.PhoneNumber;
        // req.type = this._user.role;
        // req.firstname = this._user.firstName;
        // req.lastname = this._user.lastName;

        console.log('insertPost url: ', url);
        console.log('insertPost req: ', reqData);

        return this.http.post(url, reqData)
            // .map((res: Response) => {
            //   console.log('res', res);
            //   console.log('res.json', res.json());
            //   return res.json();
            // })
            .map(mapGetPost)
            .catch(this.handleError);
    }

    /*private loadServices(): void {
  
        let url: string = VOSettings.server + '/profiles/' + VOSettings.user.id;
  
        this.http.get(url)
            .map((res: Response) => {
                return res.json().map(function (item: any) {
                    return new VOService(item);
                });
            })
            .catch(this.handleError).subscribe(
            (res: any) => {
                this.__posts = res;
                this.myServicesSubject.next(res);
                if (this.selectedId) this._selectById();
            }
        );
    }*/

    /* searchPosts(search: VOSearch) {
         this.posts = this.posts.filter(function (post: VOPost) {
             if ('fixedFrom' in search) {
  
             }
             for (let key in search) {
                 if (search[key] != post[key]) return false;
             }
             return true;
         });
         this.postSub.next(this.posts);
         console.log('this.posts', this.posts);
     }
  */
    // checkPost(post:VOPost, search:VOSearch){
    //     for(var key in search){
    //         if(search[key] !== post[key]) return false;
    //     }
    //     return true;
    // }

    /*  get_AllPosts(): void {
          let url: string = VOSettings.posts;
          this.http.get(url)
              .map((res: Response) => {
                  // console.log('res:Res', res.json().map(function(item){ return new VOPost(item)}));
                  return res.json().map(function (item) {
                      return new VOPost(item);
                  });
              })
              .catch(this.handleError)
              .subscribe((res: any) => {
                  this.posts = res;
                  this.postSub.next(res);
                  // console.log('this.posts', this.posts);
              });
      }
  */
    // get_AllPosts():Observable<VOPost[]>{
    //     var url:string = VOSettings.posts;
    //     return this.http.get(url)
    //             .map((res:Response)=>{
    //                 // console.log('res:Res', res.json().map(function(item){ return new VOPost(item)}));
    //                 return res.json().map(function(item){ return new VOPost(item)});
    //             })
    //             .catch(this.handleError)
    // }

    /*  getAllPosts(): Observable<any> {
          let url: string = VOSettings.posts;
          return this.http.get(url)
              .map((res: Response) => {
                  return res.json().map(function (item) {
                      return new VOPost(item);
                  });
              })
              .catch(this.handleError);
      }*/

    /* getPosts(): Observable<any> {
         // var url: string = VOSettings.server + 'posts';
         // var url: string = 'http://grabopapi2dev.us-west-2.elasticbeanstalk.com/api/v1/services/myservices?format=json';
  
         // let headers = new Headers({ 'Authorization': 'Bearer ' });
  
         let headers = new Headers();
         headers.append('Content-Type', 'application/json');
         // headers.append("Access-Control-Allow-Headers", "Content-Type");
         let account: VOUserExt = JSON.parse(localStorage.getItem('account'));
         // let authToken = account.token;
         // headers.append('Authorization', `Bearer ${authToken}`);
         // headers.append('Authorization', localStorage.getItem('account'));
         headers.append('Authorization', localStorage.getItem('account'));
         // let options = new RequestOptions({headers: headers});
  
         // let headers = new Headers({ 'Accept': 'application/json' });
         // headers.append('Authorization', `Bearer `);
         // let options = new RequestOptions({ headers: headers });
         // console.log('authToken', authToken);
         // console.log('account', account);
  
         let url: string = VOSettings.server + VOSettings.posts + VOSettings.myposts + VOSettings.format_json;
         return this.http.get(url, {headers: headers})
             .map((res: Response) => {
                 console.log('res', res);
                 return res.json().map(function (item) {
                     return new VOPost(item);
                 });
             }, err => console.log('err', err))
             .catch(this.handleError);
     }
  */

    /*  getPostById(id: number): Observable<any> {
          console.log('get post by id' + id);
  
          let url: string = VOSettings.server + '/post/' + id;
          return this.http.get(url)
              .map((res: Response) => {
                  return new VOPost(res.json());
              })
              .catch(this.handleError);
      }*/

    deleteAttachment(psot_id: number, id: number) {
        let url: string = VOSettings.server + 'post/' + psot_id + '/attachment/' + id;
        return this.http.delete(url)
            .map(res => res.json());
    }

    getAttachments(post_id: number): Promise<VOImage[]> {
        let url: string = VOSettings.server + '/post/' + post_id + '/attachments';
        return this.http.get(url).toPromise()
            .then((res) => {
                return res.json().map(function (item) {
                    return new VOImage(item);
                });
            });

    }

    saveAttachment(data: VOImage, post_id: number) {
        let url: string = VOSettings.server + 'post/' + post_id + '/attachment/' + data.id;

        console.log(url, data);

        return this.http.post(url, data)
            .map((res: Response) => {
                console.log(res);
                return res.json();
            });
    }


    /* getCategories(): Promise<VOCategory[]> {
         let url: string = VOSettings.server + '/posts-categories';
         return this.http.get(url).toPromise()
             .then((res) => {
                 return res.json().map(function (item) {
                     return new VOCategory(item);
                 });
             });
     }
  */

    private selectedId: number;

    /* private _selectById(): void {
         let id = this.selectedId;
         if (this.__posts) {
             let serv: VOService[] = this.__posts.filter(function (item: VOService) {
                 return item.id === id;
             });
             if (serv.length) this.myServiceSubject.next(serv[0]);
         }
     }
  */
    /*  selectServiceById(id: number): void {
          this.selectedId = id;
          this._selectById();
  
      }*/

    // updatePost(post: VOPost): Observable<any> {
    //     // var url:string = VOSettings.server+'/post/'+post.id;
    //     let url: string = VOSettings.myposts;
    //     //  var post:VOPost = this._currentService;
    //     console.log(url, post);
    //
    //     return this.http.patch(url, post)
    //         .map((res: Response) => {
    //             console.log(res);
    //             return new VOResult(res.json())
    //         }).catch(this.handleError)
    // }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

}
