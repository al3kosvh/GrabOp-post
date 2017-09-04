import {Component, OnChanges, OnInit} from '@angular/core';
import {HomeService} from './home-service';
// import {PostsService} from '../posts/posts.service';

import {VOUserExt} from '../app-login/vouser';
import {VOPost} from '../models/vos';
import {UserCommentsComponent} from './user-comments/user-comments.component';
import {ModalWindowService} from '../services/modal-window.service';
import {MyPostsService} from '../services/my-posts.service';
import {AuthHttpMy} from '../services/auth-http';
import {ConnectionService} from '../services/connection.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges{
  stats: any;
  profileConnectionsCount: number;
  myUser: VOUserExt = new VOUserExt();
  postsNeed: VOPost[];
  postsOffer: VOPost[];
  myPosts: VOPost[];

  constructor(private service: HomeService,
              private myPostsService: MyPostsService,
              private userService: AuthHttpMy,
              private connectionService: ConnectionService,
              private modal: ModalWindowService) {
    this.stats = {
      'Profile': 132000,
      'Connections': 10000,
      'Trusted By': 188,
      'Alliance Members': 188,
      'Total Sales': 20000
    };
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(user =>{
      this.myUser = user;
      console.log('this.myUser.id', this.myUser);
      this.connectionService.getProfileConnectionsCount(this.myUser.id).subscribe(res => {
        this.profileConnectionsCount = res;
        console.log('profileConnectionsCount ', res);
      });
    });

    // this.myPostsService.getMyPosts().subscribe(posts => {
    // this.myPostsService.getMyPosts();
    this.myPostsService.myPosts$.subscribe(posts => {
      console.log('posts', posts);
      this.myPosts = posts;
      // this.filterPosts(posts);
      // let ar1 =[];
      // let ar2 =[];
      // posts.forEach(function (item) {
      //   item.type === 'need'?ar1.push(item):ar2.push(item);
      // });
      // this.postsNeed= ar1;
      // this.postsOffer =  ar2;
      // this.myUser.offers = this.postsOffer.length;
      // this.myUser.needs = this.postsNeed.length;
    });
    //
    // this.myPostsService.myPosts$.subscribe(posts => {
    //   console.log('posts', posts);
    //   let ar1 =[];
    //   let ar2 =[];
    //   posts.forEach(function (item) {
    //     item.type === 'need'?ar1.push(item):ar2.push(item);
    //   });
    //   this.postsNeed= ar1;
    //   this.postsOffer =  ar2;
    //   this.myUser.offers = this.postsOffer.length;
    //   this.myUser.needs = this.postsNeed.length;
    // });

   // this.userService.getProfile().subscribe(console.log);
  }

  ngOnChanges(changes:any) {
    console.log('ngOnChanges', changes);
  }

  filterPosts(posts: VOPost[]){
    this.postsNeed = posts.filter(post => {
      if (post.type == "need") return post;
    });
    this.postsOffer = posts.filter(function(post) {
      if (post.type == "offer") return post;
    });
    this.myUser.needs = this.postsNeed.length;
    this.myUser.offers = this.postsOffer.length;
    // console.log('this.postsNeed', this.postsNeed);
    // console.log('this.postsOffer', this.postsOffer);
  }

  openComment() {

    this.modal.openWindow(UserCommentsComponent, (res) => {
      console.log('commentcomponent  ', res);
    });
  }

  onClickItem(item: VOPost) {
    this.myPostsService.setSelectedMyPost(item);
  }

}
