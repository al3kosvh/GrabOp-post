import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { VOPost } from '../../../../models/vos';

// Components
import { ModalAlertComponent } from '../../../shared/components/modal-alert/modal-alert.component';

// Services
import { AuthenticationService } from '../../../account/services/authentication.service';
import { PostService } from '../../../post/services/post.service';

@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit, OnChanges {

    model: VOPost = new VOPost({});
    // model_id: number = 20;

    // myStep: string;

    type: string;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private accountService: AuthenticationService,
        private matDialog: MatDialog
    ) { }

    ngOnChanges(obj: any): void {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();
    }

    ngOnInit(): void {

        //this.postService.my.subscribe(post => this.model = post);

        //this.postService.selectedMyPost$.subscribe(post => this.postService.setPost(post));

        //this.route.params.subscribe(params => {
        //    console.log(params);
        //    // this.myStep =  params['step'] || 'basic';
        //    const id = +params['id'];
        //    if (params['type']) {
        //        this.model = new VOPost({ type: params['type'] })
        //    } else {
        //        if (isNaN(id)) {
        //            console.error(' please provide ID for service to edit');
        //            return;
        //        }
        //        this.loadPost(id);
        //    }
        //});

    }

    onSaveClick(): void {
        // console.log(this.myServiceService);
        if (this.model.id) {
            this.postService.updatePost(this.model)
            //.subscribe(res => {
            //    console.log('updatePost', res);
            //    if (res.id) {
            //        this.dialog.open(ModalAlertComponent, { data: 'Post updated.' });
            //    }
            //}
            //);
        } else {
            this.postService.insertPost(this.model)
                .subscribe(res => {
                    console.log('insertPost', res);
                    if (res.id) {
                        this.matDialog.open(ModalAlertComponent, { data: 'New post saved.' });
                    }
                }
                );
        }
    }

}
