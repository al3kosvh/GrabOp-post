import { Component, OnChanges, OnInit } from '@angular/core';
import { VOPost } from '../models/vos';
import { PostEditService } from './post-edit.service';
import { ActivatedRoute, Router } from '@angular/router';

// import {PostsService} from '../posts/posts.service';
import { MyPostsService } from '../services/my-posts.service';
import { MdDialog } from '@angular/material';
import { ModalAlertComponent } from '../shared/components/modal-alert/modal-alert.component';
import { AuthHttpMy } from '../services/auth-http';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})

export class PostEditComponent implements OnInit, OnChanges {

    model: VOPost = new VOPost({});
    // model_id: number = 20;

    // myStep: string;

    postType: string;

    constructor(private postEditService: PostEditService,
        private myPostsService: MyPostsService,
        private aroute: ActivatedRoute,
        private router: Router,
        private accountService: AuthHttpMy,
        private dialog: MdDialog) { }

    ngOnChanges(obj: any): void {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();
    }

    ngOnInit(): void {

        this.postEditService.post$.subscribe(post => this.model = post);

        this.myPostsService.selectedMyPost$.subscribe(post => this.postEditService.setPost(post));

        this.aroute.params.subscribe(params => {
            console.log(params);
            // this.myStep =  params['step'] || 'basic';
            const id = +params['id'];
            if (params['type']) {
                this.model = new VOPost({ type: params['type'] })
            } else {
                if (isNaN(id)) {
                    console.error(' please provide ID for service to edit');
                    return;
                }
                this.loadPost(id);
            }
        });

    }

    loadPost(id: number): void {
        this.myPostsService.getMyPostById(id);
        console.log('load post ' + id);
    }

    onCloseClick() {
        this.router.navigate([{ outlets: { 'slideRight': null } }]);
    }

    onSaveClick(): void {
        // console.log(this.myServiceService);
        if (this.model.id) {
            this.postEditService.updatePost(this.model)
                .subscribe(res => {
                    console.log('updatePost', res);
                    if (res.id) {
                        this.dialog.open(ModalAlertComponent, { data: 'Post updated.' });
                    }
                }
                );
        } else {
            this.postEditService.insertPost(this.model)
                .subscribe(res => {
                    console.log('insertPost', res);
                    if (res.id) {
                        this.dialog.open(ModalAlertComponent, { data: 'New post saved.' });
                    }
                }
                );
        }
    }

}
