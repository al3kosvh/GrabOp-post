import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VOPost } from '../../../../models/vos';
import { VOUserExt } from "../../../account/models/vouser";

// Services
import { PostService } from '../../../post/services/post.service';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
    selector: 'app-my-posts',
    templateUrl: './my-posts.component.html',
    styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

    user: Models.VOUserExt;
    postsNeed: VOPost[];
    postsOffer: VOPost[];

    constructor(
        private postService: PostService,
        private profileService: ProfileService,
        private router: Router
    ) {
        this.postsNeed = [];
        this.postsOffer = [];
    }

    ngOnInit() {
        this.profileService.getProfile().subscribe(
            profile => {
                this.user = profile;
            });

        this.postService.getMyPosts().subscribe(posts => {
            this.postsNeed = posts.filter(post => post.type == "need");
            this.postsOffer = posts.filter(post => post.type == "offer");
        });
    }

    onClickPost(post: VOPost) {
        this.router.navigate(['myposts/view/', post.id]);
    }
    
}
