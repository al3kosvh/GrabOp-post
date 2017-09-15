/**
 * Created by Vlad on 12/24/2016.
 */
import { Injectable } from "@angular/core";
import { AuthHttpMy } from "./auth-http";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { VOPost, VOResult, VOSettings } from "../models/vos";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { mapGetMyPosts } from '../utils/map-functions';


@Injectable()
export class MyPostsService {
    myPosts$: Observable<VOPost[]>;
    private myPostsSub: BehaviorSubject<VOPost[]>;
    private myPosts: VOPost[];

    selectedMyPost$: Observable<VOPost>;
    private selectedMyPostSub: BehaviorSubject<VOPost>;
    private selectedMyPost: VOPost;


    constructor(private auth: AuthHttpMy) {
        this.myPostsSub = new BehaviorSubject<VOPost[]>(null);
        this.myPosts$ = this.myPostsSub.asObservable();
        /// this.getMyPosts().subscribe(res=>{
        //  console.log(res);
        // this.setPosts(res);
        // });

        this.selectedMyPostSub = new BehaviorSubject(null);
        this.selectedMyPost$ = this.selectedMyPostSub.asObservable();

        this.getMyPosts();
    }

    updatePost(post: VOPost): void {
        let url: string;
        if (post.type == 'need') url = VOSettings.updateNeedPost.replace(<any>'{{id}}', post.id.toString());
        if (post.type == 'offer') url = VOSettings.updateOfferPost.replace(<any>'{{id}}', post.id.toString());
        console.log('updatePost', url);

        this.auth.put(url, post).subscribe(res => {
            // console.log('updatePost res', res);
            this.myPosts.forEach(function (item, i, arr) {
                if (item.id === post.id) {
                    arr[i] = post;
                }
            });
            this.broadcastMyPosts();
        });
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


    private filterPostById(id: number): VOPost {
        // console.log('filterPostById', this.myPosts);
        let arr = this.myPosts.filter(function (item) {
            return item.id === id;
        });
        return arr.length ? arr[0] : null;
    }

    private selectedMyPostId: number;

    getMyPostById(id: number): Observable<VOPost> {
        // console.log('select post  ' + id);
        this.selectedMyPostId = id;
        let sub: Subject<VOPost> = new Subject();
        // let posts: VOPost[] =  this.myPostsSub.getValue();
        //  console.log('MY posts', this.myPosts);
        if (this.myPosts) {
            let post: VOPost = this.filterPostById(id);
            this.selectedMyPostSub.next(post);
        } else {
            this.getMyPosts()
                .subscribe(res => {
                    //   console.log('getMyPostById', res);
                    // this.setPosts(res);
                    this.selectedMyPost = this.filterPostById(id);
                    sub.next(this.selectedMyPost);
                    console.warn(this.selectedMyPost);
                    this.selectedMyPostSub.next(this.selectedMyPost);
                })
        }
        return sub.asObservable();
    }

    setSelectedMyPost(post: VOPost): void {
        if (this.selectedMyPost) this.selectedMyPost.isSelected = false;
        this.selectedMyPost = post;
        this.selectedMyPost.isSelected = true;
        this.selectedMyPostSub.next(post);
    }

    broadcastMyPosts(): void {
        // console.log('setMyPosts', posts);
        this.myPostsSub.next(this.myPosts);
    }

    getMyPosts(): Observable<VOPost[]> {
        // getMyPosts():void {
        let url: string = VOSettings.getMyPosts;
        /// console.log(' loading posts '+ url);
        this.auth.get(url)
            // .map(res => console.log('res MAP', res))
            //   .map(res => mapGetMyPosts(res))
            .map(mapGetMyPosts)
            // .catch(this.handleError)
            .subscribe(res => {
                //     console.log('getMyPosts ', res);
                this.myPosts = res;
                this.broadcastMyPosts();
            });
        return this.myPosts$;
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


    handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

    // ????????????????????????????????????????

    // deletePost(post: VOPost): void {
    //   let url: string = VOSettings.server + 'post/' + post.id;
    //   this.auth.delete(url)
    //     .map(res => new VOResult(res.json()))
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
    //     .map(res => new VOResult(res.json()))
    //     .subscribe((result)=>{
    //       if(result.success){
    //         // let post = this.filterPostById(post_id, this.posts);
    //         //post.attachments--;
    //       }
    //     });
    // }
}