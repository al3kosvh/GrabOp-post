import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VOPost } from '../../../../models/vos';
import { VOUserExt } from '../../../account/models/vouser';

// Services
import { PostService } from '../../services/post.service';
import { ProfileService } from '../../../profile/services/profile.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';

@Component({
    selector: 'my-post-view',
    templateUrl: './my-post-view.component.html',
    styleUrls: ['./my-post-view.component.css']
})
export class MyPostViewComponent implements OnInit {

    idPost: number;
    idPerson: string;
    person: Models.VOUserExt;
    personLocation: Models.ProfileLocation;
    post: VOPost = new VOPost({});
    personPosts: VOPost[] = [];

    constructor(
        private postService: PostService,
        private profileService: ProfileService,
        private route: ActivatedRoute,
        private dialog: DialogService,
        private snackBarService: SnackBarService,
    ) { }

    ngOnInit() {

        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.postService.getPostById(params['id']).subscribe(
                    post => {
                        this.post = post;
                        console.log(post);
                        this.profileService.getProfile().subscribe(profile => {
                            this.person = profile;
                            this.profileService.getProfileLocation(profile.id, 1).subscribe(location => this.personLocation = location);                            
                        });
                        this.postService.getPersonPosts(16).subscribe(posts => { this.personPosts = posts });
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
        this.postService.getPersonPosts(userId).subscribe(posts => {
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

    onDelete() {

        let data = {
            title: 'Delete Service',
            body: 'Are you sure?'
        }

        this.dialog.openConfirm(data, res => {
            if (res == true) {
                this.postService.deleteService(this.post.id).subscribe(result => {
                    this.snackBarService.showMessage('Service deleted!', 'Undo').onAction().subscribe(() => {
                        console.log('Undo');
                    });
                });
            }
        });
    }

    onHide() {

        let data = {
            title: 'Hide Service',
            body: 'Are you sure?'
        }

        this.dialog.openConfirm(data, res => {
            if (res == true) {
                this.postService.hideService(this.post.id).subscribe(result => {
                    this.snackBarService.showMessage('Service hidden!', 'Undo').onAction().subscribe(() => {
                        console.log('Undo');
                    });
                });
            }
        });
    }
}
