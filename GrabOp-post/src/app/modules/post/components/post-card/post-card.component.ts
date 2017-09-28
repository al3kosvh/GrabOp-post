import { Component, Input, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';
// import {PostsService} from "../../posts/posts.service";
// import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

    @Input() post: VOPost;
    @Input() editButton: boolean;
    @Input() viewDetailsButton: boolean;
    @Input() viewMyDetailsButton: boolean;

    @Input() idPerson: string;

    private postImage = 'assets/img/pic05-300x195.jpg';
    private accountImage = 'assets/img/temp-users-img/6.jpg';

    accountIMG = '';
    // imgURL = 'url(img/img-girl.jpg)';
    constructor(
        // private postsService: PostsService,
        // router: Router,
        // route: ActivatedRoute) {
    ) {

    }

    ngOnInit() {
        // this.postsService
    }

}
