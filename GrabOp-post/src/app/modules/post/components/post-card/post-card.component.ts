import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
// import {ActivatedRoute, Router} from '@angular/router';

// Services
import { SidenavService } from '../../../../services/sidenav.service';
import { PostService } from '../../services/post.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';

@Component({
    selector: 'post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    @Input() post: VOPost;
    @Input() editButton: boolean;
    @Input() viewDetailsButton: boolean;
    @Input() viewMyDetailsButton: boolean;

    @Input() idPerson: string;

    postImage = 'assets/img/pic05-300x195.jpg';
    accountImage = 'assets/img/temp-users-img/6.jpg';

    accountIMG = '';
    // imgURL = 'url(img/img-girl.jpg)';
    constructor(
        private router: Router,
        private sidenavService: SidenavService,
        private snackBarService: SnackBarService,
        private postService: PostService 
        // route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        //console.log(this.post);
    }

    showOptions(event: MouseEvent) {
        this.trigger.openMenu();
    }

    onViewDetails() {
        this.router.navigate(['myposts/view/', this.post.id]);
    }

    onEdit() {
        this.sidenavService.onEditPost(this.post);
    }

    onDelete() {
        this.postService.deleteService(this.post.id).subscribe(result => {
            if (result)
                this.snackBarService.showMessage(result);
        });
    }

}
