import { Component, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { VOUserExt } from "../../../account/models/vouser";

// Components
import { UserCommentsComponent } from '../user-comments/user-comments.component';

// Services
import { ModalWindowService } from '../../../shared/services/modal-window.service';
import { PostService } from '../../../post/services/post.service';
import { ConnectionService } from '../../../connection/services/connection.service';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    stats: any;
    connectionsCount: number;
    person: Models.VOUserExt;
    postsNeed: VOPost[];
    postsOffer: VOPost[];
    myPosts: VOPost[];

    constructor(
        private postService: PostService,
        private connectionService: ConnectionService,
        private modal: ModalWindowService,
        private profileService: ProfileService
    ) {
        this.stats = {
            'Profile': 132000,
            'Connections': 10000,
            'Trusted By': 188,
            'Alliance Members': 188,
            'Total Sales': 20000
        };
        this.myPosts = [];
    }

    ngOnInit(): void {

        this.profileService.getProfile().subscribe(
            profile => {
                this.person = profile;
                this.connectionService.getProfileConnectionsCount(profile.id).subscribe(res => {
                    this.connectionsCount = res;
                });
            });

        this.postService.getMyPosts().subscribe(posts => {
            this.myPosts = posts;
        });
    }

    openComment() {

        this.modal.openWindow(UserCommentsComponent, (res) => {
            console.log('commentcomponent  ', res);
        });
    }

}
