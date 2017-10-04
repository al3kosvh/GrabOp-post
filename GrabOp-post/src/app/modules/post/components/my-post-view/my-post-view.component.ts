import { Component, Input, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { AuthenticationService } from '../../../account/services/authentication.service';

@Component({
    selector: 'app-my-post-view',
    templateUrl: './my-post-view.component.html',
    styleUrls: ['./my-post-view.component.css']
})
export class MyPostViewComponent implements OnInit {

    // @Input() myPost: VOPost;
    myUser: Models.VOUserExt;
    idMyPost: number;
    // idSelectedMyPost: number;
    myPost: VOPost = new VOPost({});
    myPosts: VOPost[];

    constructor(
        private postService: PostService,
        private userService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.userService.getUser().subscribe(user => {
            this.myUser = user;
            console.log('this.myUser', this.myUser);
        });

        this.postService.getMyPosts().subscribe(posts => {
            console.log('posts', posts);
            this.myPosts = posts;
        });

        //this.postService.selectedMyPost$.subscribe(post => {
        //    console.log('myPost', post);
        //    this.myPost = post;
        //});

        this.route.params.subscribe(params => {
            // console.log(params);
            // this.idSelectedMyPost =  +params['idSelectedMyPost'];
            this.idMyPost = +params['idMyPost'];
            if (isNaN(this.idMyPost)) {
                console.error(' please provide ID for post to view');
                return;
            }
            this.postService.getMyPostById(this.idMyPost);
        });
    }

    onEditClick() {
        this.router.navigate(['', { outlets: { 'slideRight': ['post-edit', this.idMyPost] } }]);
        // this.router.navigate(['post-edit/' + this.idMyPost]);
    }

    onClickItem(item: VOPost) {
        this.postService.setSelectedMyPost(item);
    }

    onDuplicateClick() { }
    onShareClick() { }
    onHideClick() { }
    onDeleteClick() { }

}
