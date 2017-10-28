import { Component, OnChanges, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { VOUserExt } from "../../../account/models/vouser";

// Components
import { UserCommentsComponent } from '../user-comments/user-comments.component';

// Services
import { ModalWindowService } from '../../../shared/services/modal-window.service';
import { PostService } from '../../../post/services/post.service';
import { ConnectionService } from '../../../connection/services/connection.service';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
    stats: any;
    connectionsCount: number;
    person: Models.VOUserExt;
    postsNeed: VOPost[];
    postsOffer: VOPost[];
    myPosts: VOPost[];

    constructor(
        private postService: PostService,
        private connectionService: ConnectionService,
        private modal: ModalWindowService,
        private profileService: ProfileService
    ) {
        this.stats = {
            'Profile': 132000,
            'Connections': 10000,
            'Trusted By': 188,
            'Alliance Members': 188,
            'Total Sales': 20000
        };
        this.myPosts = [];
    }

    ngOnInit(): void {

        this.profileService.getProfile().subscribe(
            profile => {
                this.person = profile;
                this.connectionService.getProfileConnectionsCount(profile.id).subscribe(res => {
                    this.connectionsCount = res;
                });
            });

        // this.myPostsService.getMyPosts().subscribe(posts => {
        // this.myPostsService.getMyPosts();
        this.postService.getMyPosts().subscribe(posts => {
            // console.log('posts', posts);
            if (!posts) return;
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

    ngOnChanges(changes: any) {
        console.log('ngOnChanges', changes);
    }

    filterPosts(posts: VOPost[]) {
        this.postsNeed = posts.filter(post => {
            if (post.type == "need") return post;
        });
        this.postsOffer = posts.filter(function (post) {
            if (post.type == "offer") return post;
        });
        this.person.needs = this.postsNeed.length;
        this.person.offers = this.postsOffer.length;
        // console.log('this.postsNeed', this.postsNeed);
        // console.log('this.postsOffer', this.postsOffer);
    }

    openComment() {

        this.modal.openWindow(UserCommentsComponent, (res) => {
            console.log('commentcomponent  ', res);
        });
    }

}
