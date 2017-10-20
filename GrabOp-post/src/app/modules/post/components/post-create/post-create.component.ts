import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSidenav } from '@angular/material';

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

export class PostCreateComponent implements OnInit {

    @Input() sidenav: MatSidenav;
    model: VOPost = new VOPost({});
    selectedIndex = 0;

    // model_id: number = 20;

    // myStep: string;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private accountService: AuthenticationService,
        private matDialog: MatDialog
    ) { }

    ngOnInit(): void { }

    onSavePost(): void {

        this.postService.insertPost(this.model)
            .subscribe(res => {                
                if (res.id) {
                    this.matDialog.open(ModalAlertComponent, { data: 'New post saved.' });
                }
            },
            error => {
                console.log(error);
            });

    }

    onNext(index: number) {
        this.selectedIndex = index;
    }

    onCancel() {
        this.sidenav.close();
    }

}
