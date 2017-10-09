import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { VOUserExt } from '../../../account/models/vouser';
import { VOPost } from '../../../../models/vos';

// Services
import { PostService } from '../../../post/services/post.service';

@Component({
    selector: 'alliance-invite',
    templateUrl: './alliance-invite.component.html',
    styleUrls: ['./alliance-invite.component.css']    
})
export class AllianceInviteComponent implements OnInit {
    
    person: VOUserExt;
    myPosts: VOPost[];

    constructor(
        private postService: PostService,
        private router: Router
    ) { }

    ngOnInit() {
        console.log(this.person);
        this.postService.getMyPosts().subscribe(
            posts => {
                this.myPosts = posts;
            });

    }
}
