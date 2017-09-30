import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';

import { VOPost } from '../../../../models/vos';

// Components
import { ModalAlertComponent } from '../../../shared/components/modal-alert/modal-alert.component';

// Services
import { PostEditService } from '../../services/post-edit.service';
import { AuthenticationService } from '../../../account/services/authentication.service';
import { MyPostsService } from '../../../post/services/my-posts.service';

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
        private router: Router,
        private route: ActivatedRoute,
        private accountService: AuthenticationService,
        private dialog: MdDialog
    ) { }

    ngOnChanges(obj: any): void {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();
    }

    ngOnInit(): void {

        this.postEditService.post$.subscribe(post => this.model = post);

        this.myPostsService.selectedMyPost$.subscribe(post => this.postEditService.setPost(post));

        this.route.params.subscribe(params => {
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
