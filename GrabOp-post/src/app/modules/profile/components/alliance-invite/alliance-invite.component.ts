import { Component, OnInit } from '@angular/core';

import { VOUserExt } from '../../../account/models/vouser';
import { VOPost } from '../../../../models/vos';
// Services
import { PostService } from '../../../post/services/post.service';
import { AllianceService } from "../../services/alliance.service";

@Component({
    selector: 'alliance-invite',
    templateUrl: './alliance-invite.component.html',
    styleUrls: ['./alliance-invite.component.css']
})
export class AllianceInviteComponent implements OnInit {

    person: VOUserExt;
    myPosts: VOPost[];

    constructor(private postService: PostService,
                private allianceService: AllianceService) {
    }

    ngOnInit() {
        console.log('Alliance Person: ', this.person);
        this.postService.getMyPosts().subscribe(
            posts => {
                this.myPosts = posts;
            });
        this.allianceService.getMyAlliances().subscribe(
            alliances => {
                console.log('My Alliances success: ', alliances)
            },
            err => {
                console.log('My Alliances error: ', err)
            },
            () => {

            }
        )
    }

    invite(post) {

    }
}
