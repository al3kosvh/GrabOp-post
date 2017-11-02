import { Component, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { VOUserExt } from "../../../account/models/vouser";
import { asEnumerable } from "linq-es5";

// Components
import { UserCommentsComponent } from '../user-comments/user-comments.component';

// Services
import { DialogService } from '../../../shared/services/dialog.service';
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
    myPostsNeed: VOPost[];
    myPostsOffer: VOPost[];

    constructor(
        private postService: PostService,
        private connectionService: ConnectionService,
        private dialog: DialogService,
        private profileService: ProfileService
    ) {
        this.stats = {
            'Profile': 132000,
            'Connections': 10000,
            'Trusted By': 188,
            'Alliance Members': 188,
            'Total Sales': 20000
        };
        this.myPostsNeed = [];
        this.myPostsOffer = [];
    }

    ngOnInit(): void {

        this.profileService.getProfile().subscribe(
            profile => {
                this.person = profile;
                this.connectionService.getProfileConnectionsCount(profile.id).subscribe(res => {
                    this.connectionsCount = res;
                });
            });

        this.postService.myPosts$.subscribe(posts => {
            this.myPostsNeed = asEnumerable(posts).Where(p => p.type == 'need').ToArray();
            this.myPostsOffer = asEnumerable(posts).Where(p => p.type == 'offer').ToArray();
        });
    }

    openComment() {

        this.dialog.open(UserCommentsComponent, (res) => {
            console.log('commentcomponent  ', res);
        });
    }

}
