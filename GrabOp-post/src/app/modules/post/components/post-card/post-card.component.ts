import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
// import {PostsService} from "../../posts/posts.service";
// import {ActivatedRoute, Router} from '@angular/router';

// Services
import { SidenavService } from '../../../../services/sidenav.service';

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
        private sidenavService: SidenavService
        // router: Router,
        // route: ActivatedRoute) {
    ) {

    }

    ngOnInit() {
        // this.postsService
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

}
