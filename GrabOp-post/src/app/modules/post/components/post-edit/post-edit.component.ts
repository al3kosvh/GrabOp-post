import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';

import { VOPost } from '../../../../models/vos';

// Components
import { ModalAlertComponent } from '../../../shared/components/modal-alert/modal-alert.component';

// Services
import { PostService } from '../../../post/services/post.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';

// Enums
import { PostAction } from '../../models/post-action.enum';

@Component({
    selector: 'post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})

export class PostEditComponent implements OnInit, OnChanges {

    @Input() sidenav: MatSidenav;
    @Input() post: VOPost;
    action = PostAction.Update;
    model: VOPost = new VOPost({});
    canEditAlliance: boolean = false;

    constructor(
        private postService: PostService,
        private snackbarService: SnackBarService
    ) { }

    ngOnChanges(): void { }

    ngOnInit(): void {
        this.model = JSON.parse(JSON.stringify(this.post));
        this.checkPermissions();
    }

    checkPermissions(): void {
        if (this.model.type == 'offer') this.canEditAlliance = true;
    }

    onSaveClick(): void {

        this.postService.updatePost(this.model)
            .subscribe(post => {
                if (post) {
                    this.snackbarService.showMessage('Post Updated');
                    this.sidenav.close();
                }
            });

    }

    onCancel() {
        this.sidenav.close();
    }

}
