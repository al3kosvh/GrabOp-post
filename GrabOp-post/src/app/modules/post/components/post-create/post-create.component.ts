import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';

import { VOPost } from '../../../../models/vos';

// Components
import { ModalAlertComponent } from '../../../shared/components/modal-alert/modal-alert.component';

// Services
//import { AuthenticationService } from '../../../account/services/authentication.service';
import { PostService } from '../../../post/services/post.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';

@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

    @Input() sidenav: MatSidenav;
    model: VOPost;
    selectedIndex = 0;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private snackbarService: SnackBarService,
        //private accountService: AuthenticationService,        
    ) {
        this.model = new VOPost({});
        this.model.isPublic = true;
        this.model.isPartnership = false;
        this.model.isExchange = false;
        this.model.isDonate = false;
        this.model.isInternship = false;
        this.model.isMoney = false;
    }

    ngOnInit(): void { }

    onSavePost(): void {

        this.postService.insertPost(this.model)
            .subscribe(res => {
                if (res.id) {
                    this.snackbarService.showMessage(res.title);
                }
            });

    }

    onNext(index: number) {
        this.selectedIndex = index;
    }

    onCancel() {
        this.sidenav.close();
    }

}
