/**
 * Created by Vlad on 12/24/2016.
 */
import {Injectable} from "@angular/core";
import {AuthHttpMy} from "./auth-http";
import {Observable}     from 'rxjs/Observable';
import {Subject}    from 'rxjs/Subject';
import {VOPost, VOResult, VOSettings} from "../models/vos";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {mapGetMyPosts, mapGetPost} from '../utils/map-functions';

@Injectable()
export class PostsService{
  posts$: Observable<VOPost[]>;
  private postsSub: BehaviorSubject<VOPost[]>;
  private posts: VOPost[];

  selectedPost$: Observable<VOPost>;
  private selectedPostSub: BehaviorSubject<VOPost>;
  private selectedPost: VOPost;

  constructor(private auth: AuthHttpMy){
    this.postsSub = new BehaviorSubject(null);
    this.posts$ = this.postsSub.asObservable();

    this.selectedPostSub = new BehaviorSubject(null);
    this.selectedPost$ = this.selectedPostSub.asObservable();
  }

  private filterPostById(id: number): VOPost {
    console.log('filterPostById', this.posts);
    let arr = this.posts.filter(function (item) {
      return item.id === id;
    });
    return arr.length ? arr[0] : null;
  }

  private selectedPostId: number;

  getPostById(idPost: number, idPerson?: number): Observable<VOPost> {
    // if(this.postsSub.getValue().length)
    let url: string = VOSettings.getPostById.replace(<any>'{{id}}', idPost.toString());
    // let sub: Subject<VOPost> = new Subject();
    this.selectedPostId = idPost;
    // let post: VOPost = this.filterPostById(id, this.postsSub.getValue());
    // let posts: VOPost[] = this.postsSub.getValue();
    console.log('post', this.posts);
    if(this.posts){
      let post: VOPost = this.filterPostById(idPost);
      this.selectedPostSub.next(post);
    }else{
      this.auth.get(url)
        // .map(res => this.mapSelectPostById(res.json()))
        .map(mapGetPost)
        .subscribe(result => {
          console.log('result', result);
          this.selectedPost = result;
          this.selectedPostSub.next(result);
        });
    }
    return this.selectedPost$;
  }

  setSelectedPost(post: VOPost): void {
    if (this.selectedPost) this.selectedPost.isSelected = false;
    this.selectedPost = post;
    this.selectedPost.isSelected = true;
    this.selectedPostSub.next(post);
  }

  mapSelectPostById(item: any): VOPost {
    return item;
  }

  broadcastPosts(): void {
    this.postsSub.next(this.posts);
  }

  getPersonPosts(idPerson: string): Observable<VOPost[]> {
    let url:string = VOSettings.getPosts.replace(<any>'{{id}}', idPerson.toString());
    console.log(url);

    this.auth.get(url)
      .map(mapGetMyPosts)
      .subscribe(res=>{
        console.log('getPosts ', res);
        this.posts = res;
        this.broadcastPosts();
      });
    return this.posts$;
  }


  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      console.error(error);
    return Observable.throw(errMsg);
  }

  // ??????????????????????????????????

  // deletePost(post: VOPost): void {
  //   let url: string = VOSettings.server + 'post/' + post.id;
  //   this.auth.delete(url)
  //     .map(res => new VOResult(res.json()))
  //     .subscribe((result)=>{
  //       if(result.success){
  //         this.posts.splice(this.posts.indexOf(post), 1);
  //       }
  //     });
  // }

  /* deleteAttachment(post_id: number, id: number): void {
   let url: string = VOSettings.server + 'post/' + post_id + '/attachment/' + id;
   this.auth.delete(url)
   .map(res => new VOResult(res.json()))
   .subscribe((result)=>{
   if(result.success){
   let post = this.filterPostById(post_id, this.posts);
   post.attachments--;
   }
   });
   }
   */
}
