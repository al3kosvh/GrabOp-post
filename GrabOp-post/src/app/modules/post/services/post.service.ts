import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { VOPost, VOResult, VOSettings, VOImage } from "../../../models/vos";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {
    mapGetPosts, mapGetPost, mapPostSendCreateNeed, mapPostSendCreateOffer,
    mapPostSendUpdateNeed, mapPostSendUpdateOffer
} from '../../../utils/map-functions';
import { asEnumerable } from "linq-es5";

// Services
import { HttpService } from "../../account/services/http.service";
import { AuthenticationService } from '../../account/services/authentication.service';

@Injectable()
export class PostService {
    //myPosts$: Observable<VOPost[]>;
    //private myPostsSub: BehaviorSubject<VOPost[]>;
    //private myPosts: VOPost[];

    //selectedMyPost$: Observable<VOPost>;
    //private selectedMyPostSub: BehaviorSubject<VOPost>;
    //private selectedMyPost: VOPost;

    private myPostsSubject = new BehaviorSubject<VOPost[]>([]);
    public myPosts$ = this.myPostsSubject.asObservable();
    private myPosts: VOPost[]; 

    constructor(
        private http: HttpService,
        private authService: AuthenticationService
    ) {
        this.authService.isLoggedIn().subscribe(isLoggedIn => {
            if (isLoggedIn) {
                this.getMyPosts().subscribe(posts => {
                    this.myPosts = posts;
                    this.myPostsSubject.next(this.myPosts);
                });
            }
        });        
    }

    getPersonPosts(personId: number): Observable<VOPost[]> {
        let url: string = VOSettings.getPosts;
        return this.http.get(url.replace(<any>'{{id}}', personId.toString())).map(mapGetPosts)
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getMyPosts(): Observable<VOPost[]> {
        let url: string = VOSettings.getMyPosts;

        return this.http.get(url).map(mapGetPosts)
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getPostById(postId: string): Observable<VOPost> {
        let url: string = VOSettings.getPostById;

        return this.http.get(url.replace(<any>'{{id}}', postId)).map(mapGetPost)
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    deleteService(postId: number): Observable<any> {
        let url: string = VOSettings.deleteService;

        return this.http.delete(url.replace(<any>'{{id}}', postId.toString()))
            .map((res) => {
                this.myPosts = asEnumerable(this.myPosts).Where(p => p.id != res).ToArray();
                this.myPostsSubject.next(this.myPosts);
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    hideService(postId: number): Observable<any> {
        let url: string = VOSettings.hideService;

        return this.http.put(url, { id: postId })
            .map((res) => {
                this.myPosts = this.myPosts.map(post => {
                    if (post.id == res) {
                        post.status = 2;
                    }
                    return post;
                });
                this.myPostsSubject.next(this.myPosts);
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    showService(postId: number): Observable<any> {
        let url: string = VOSettings.showService;

        return this.http.put(url, { id: postId })
            .map((res) => {
                this.myPosts = this.myPosts.map(post => {
                    if (post.id == res) {
                        post.status = 1;
                    }                    
                    return post;                    
                });
                this.myPostsSubject.next(this.myPosts);
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    updatePost(post: VOPost): Observable<VOPost> {
        
        let url: string;
        if (post.type == 'need') url = VOSettings.updateNeedPost.replace(<any>'{{id}}', post.id.toString());
        if (post.type == 'offer') url = VOSettings.updateOfferPost.replace(<any>'{{id}}', post.id.toString());

        return this.http.put(url, post)
            .map((res) => {
                let mapPost = mapGetPost(res);
                this.myPosts = this.myPosts.map(post => {
                    if (post.id == res.id) {
                        post = mapPost;
                    }
                    return post;
                });
                this.myPostsSubject.next(this.myPosts);
                return mapPost
            })
            .catch((error: any) => Observable.throw(error));
    }

    getCategories(): Observable<Models.Category[]> {
        return this.http.get(VOSettings.getCategories).catch((error: any) => Observable.throw(error || 'Server error'));
    }

    addPost(post: VOPost): void {

    }

    /*getMyPostById(id:number):Observable<VOPost>{
      let sub:Subject<VOPost> = new Subject();
      if(this.posts){
        let post:VOPost = this.filterPostById(id,this.posts);
        sub.next(post);
   
      }else this.getMyPosts().subscribe(res=>{
        this.setPosts(res);
        let post:VOPost = this.filterPostById(id,this.posts);
        sub.next(post);
   
      })
      return sub.asObservable();
    }*/


    //private filterPostById(id: number): VOPost {
    //    // console.log('filterPostById', this.myPosts);
    //    //let arr = this.myPosts.filter(function (item) {
    //    //    return item.id === id;
    //    //});
    //    //return arr.length ? arr[0] : null;
    //}

    getMyPostById(id: number): Observable<VOPost> {
        // console.log('select post  ' + id);        
        let sub: Subject<VOPost> = new Subject();
        // let posts: VOPost[] =  this.myPostsSub.getValue();
        //  console.log('MY posts', this.myPosts);
        //if (this.myPosts) {
        //    let post: VOPost = this.filterPostById(id);
        //    this.selectedMyPostSub.next(post);
        //} else {
        //    //this.getMyPosts()
        //    //    .subscribe(res => {
        //    //        //   console.log('getMyPostById', res);
        //    //        // this.setPosts(res);
        //    //        this.selectedMyPost = this.filterPostById(id);
        //    //        sub.next(this.selectedMyPost);
        //    //        console.warn(this.selectedMyPost);
        //    //        this.selectedMyPostSub.next(this.selectedMyPost);
        //    //    })
        //}
        return sub.asObservable();
    }

    setSelectedMyPost(post: VOPost): void {
        //if (this.selectedMyPost) this.selectedMyPost.isSelected = false;
        //this.selectedMyPost = post;
        //this.selectedMyPost.isSelected = true;
        //this.selectedMyPostSub.next(post);
    }

    broadcastMyPosts(): void {
        // console.log('setMyPosts', posts);
        //this.myPostsSub.next(this.myPosts);
    }

    // getMyPosts(): Observable<VOPost[]> {
    //   let url:string = VOSettings.getMyPosts;
    //   console.log(' loading posts '+ url);
    //   this.auth.get(url)
    //     // .map(res => console.log('res MAP', res))
    //     .map(mapGetMyPosts)
    //     .catch(this.handleError)
    //     .subscribe(res => this.setMyPosts(res));
    //   return this.myPosts$;
    // }

    // private mapGetMyPosts(post: SOPost): VOPost {
    //
    //   return {
    //     id:post.id,
    //     title: post.title,
    //     isExchange: post.exchange,
    //     isDonation: post.donate,
    //     isInternship: post.internship,
    //     isPartnership: post.partnership,
    //     commissionFrom: post.commissionFrom,
    //     commissionTo: post.commissionTo,
    //     fixedRateFrom: post.fixedRateFrom,
    //     fixedRateTo: post.fixedRateTo,
    //     hourlyRateFrom: post.hourlyRateFrom,
    //     hourlyRateTo: post.hourlyRateTo,
    //     latitude: 24,
    //     longitude: 23,
    //     summary: post.summary,
    //     country: post.country,
    //     categoryid: post.categoryid,
    //     city: post.city,
    //     documents: [''],
    //     isPublic: post.visibleToPublic,
    //     keywords:  post.keywords?post.keywords.split(','):null,
    //     pictures: [],
    //     province: post.province,
    //     videos:[]
    //   }
    // }

    // ????????????????????????????????????????

    // deletePost(post: VOPost): void {
    //   let url: string = VOSettings.server + 'post/' + post.id;
    //   this.auth.delete(url)
    //     .map(res => new VOResult(res))
    //     .subscribe((result)=>{
    //       if(result.success){
    //        let posts:VOPost[] =  this.myPostsSub.getValue();
    //         posts.splice(posts.indexOf(post), 1);
    //         this.myPostsSub.next(posts);
    //       }
    //     });
    // }

    // deleteAttachment(post_id: number, id: number): void {
    //   let url: string = VOSettings.server + 'post/' + post_id + '/attachment/' + id;
    //   this.auth.delete(url)
    //     .map(res => new VOResult(res))
    //     .subscribe((result)=>{
    //       if(result.success){
    //         // let post = this.filterPostById(post_id, this.posts);
    //         //post.attachments--;
    //       }
    //     });
    // }

    insertPost(post: VOPost): Observable<VOPost> {


        let postType: string = post.type;
        // delete post.type;
        let url: string;
        let reqData: any;
        // let req = {};

        if (postType == 'need') {
            reqData = mapPostSendCreateNeed(post);
            url = VOSettings.createNeedPost;
            // url = VOSettings.server + VOSettings.posts + VOSettings.need + VOSettings.format_json;
        } else if (postType == 'offer') {
            reqData = mapPostSendCreateOffer(post);
            url = VOSettings.createOfferPost;
            // url = VOSettings.server + VOSettings.posts + VOSettings.offer + VOSettings.format_json;
        }

        return this.http.post(url, reqData)
            .map((res) => {
                let post = mapGetPost(res);
                this.myPosts.push(post);
                this.myPostsSubject.next(this.myPosts)
                return post;
            })
            .catch((error: any) => Observable.throw(error));
    }

    duplicatePost(post: VOPost): Observable<VOPost> {
        post.title = post.title + ' (Duplicated)';
        return this.insertPost(post);
    }

    deleteAttachment(psot_id: number, id: number) {
        let url: string = VOSettings.server + 'post/' + psot_id + '/attachment/' + id;
        return this.http.delete(url)
            .map(res => res);
    }

    getAttachments(post_id: number): Promise<VOImage[]> {
        let url: string = VOSettings.server + '/post/' + post_id + '/attachments';
        return this.http.get(url).toPromise()
            .then((res) => {
                return res.map(function (item) {
                    return new VOImage(item);
                });
            });

    }

    saveAttachment(data: VOImage, post_id: number) {
        let url: string = VOSettings.server + 'post/' + post_id + '/attachment/' + data.id;

        console.log(url, data);

        return this.http.post(url, data)
            .map((res) => {
                console.log(res);
                return res;
            });
    }
}
