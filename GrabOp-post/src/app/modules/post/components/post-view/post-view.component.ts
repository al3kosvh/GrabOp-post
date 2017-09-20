import { Component, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { MyPostsService } from '../../services/my-posts.service';
import { VOUserExt } from '../../../account/models/vouser';
import { ProfileService } from '../../../account/services/profile.service';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

    idPost: number;
    idPerson: string;
    person: VOUserExt;
    post: VOPost = new VOPost({});
    // myPosts: VOPost[];
    personPosts: VOPost[];

    constructor(private postsService: PostsService,
        private profileService: ProfileService,
        // private myPostsService: MyPostsService,
        private aroute: ActivatedRoute) { }

    ngOnInit() {
        // this.myPostsService.myPosts$.subscribe(posts => {
        //   console.log('posts', posts);
        //   this.myPosts = posts;
        // });

        this.postsService.selectedPost$.subscribe(post => {
            console.log('Post', post);
            this.post = post;
            // this.profileService.getProfileById(post.ownerId);
        });

        this.aroute.params.subscribe(params => {
            // console.log(params);
            this.idPerson = params['idPerson'];
            this.idPost = +params['idPost'];
            // if (isNaN(this.idPost) || isNaN(this.idPerson)) {
            if (isNaN(this.idPost)) {
                console.error(' please provide ID for post to view');
                return;
            } else if (!(this.idPerson)) {
                console.error(' please provide ID for person to view');
                return;
            }
            this.postsService.getPostById(this.idPost);
            //   .subscribe(post => {
            //   this.profileService.getProfileById(post.ownerId);
            //   this.profileService.person$.subscribe(res => this.person = res);
            // });
            this.profileService.getProfileById(this.idPerson);

            this.profileService.person$.subscribe(res => this.person = res);

            this.postsService.getPersonPosts(this.idPerson);
            this.postsService.posts$.subscribe(posts => {
                console.log('Person posts', posts);
                this.personPosts = posts;
            });
        });
    }

    onClickItem(item: VOPost) {
        this.postsService.setSelectedPost(item);
    }

    onRequestClick() { }
    onShareClick() { }
    onReportClick() { }
    onRecommendClick() { }
}
