import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VOPost } from '../../../../models/vos';
import { PostService } from '../../services/post.service';
import { VOUserExt } from '../../../account/models/vouser';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
    selector: 'my-post-view',
    templateUrl: './my-post-view.component.html',
    styleUrls: ['./my-post-view.component.css']
})
export class MyPostViewComponent implements OnInit {

    idPost: number;
    idPerson: string;
    person: Models.VOUserExt;
    post: VOPost = new VOPost({});
    // myPosts: VOPost[];
    personPosts: VOPost[] = [];

    constructor(
        private postService: PostService,
        private profileService: ProfileService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.postService.getPostById(params['id']).subscribe(
                    post => {
                        this.postService.getUserPosts(16).subscribe(posts => { this.personPosts = posts });
                    });

            }
        });

        // this.myPostsService.myPosts$.subscribe(posts => {
        //   console.log('posts', posts);
        //   this.myPosts = posts;
        // });

        //this.postService.selectedMyPost$.subscribe(post => {
        //    console.log('Post', post);
        //    this.post = post;
        //    // this.profileService.getProfileById(post.ownerId);
        //});

        //this.aroute.params.subscribe(params => {
        //    // console.log(params);
        //    this.idPerson = params['idPerson'];
        //    this.idPost = +params['idPost'];
        //    // if (isNaN(this.idPost) || isNaN(this.idPerson)) {
        //    if (isNaN(this.idPost)) {
        //        console.error(' please provide ID for post to view');
        //        return;
        //    } else if (!(this.idPerson)) {
        //        console.error(' please provide ID for person to view');
        //        return;
        //    }
        //    this.postService.getPostById(this.idPost);
        //    //   .subscribe(post => {
        //    //   this.profileService.getProfileById(post.ownerId);
        //    //   this.profileService.person$.subscribe(res => this.person = res);
        //    // });
        //    this.profileService.getProfileById(this.idPerson).subscribe(res => this.person = res);

        //    // this.profileService.person$.subscribe(res => this.person = res);

        //    this.postService.getPersonPosts(this.idPerson);
        //    this.postService.posts$.subscribe(posts => {
        //        console.log('Person posts', posts);
        //        this.personPosts = posts;
        //    });
        //});
    }

    getUserRelatedPosts(userId): VOPost[] {
        console.log(userId);
        this.postService.getUserPosts(userId).subscribe(posts => {
            return posts
        });
        return [];
    }

    onClickItem(item: VOPost) {
        //this.postService.setSelectedPost(item);
    }

    onRequestClick() { }
    onShareClick() { }
    onReportClick() { }
    onRecommendClick() { }
}
