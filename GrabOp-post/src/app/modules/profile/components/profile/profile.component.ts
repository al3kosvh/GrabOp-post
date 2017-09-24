import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MdDialog, MdDialogRef } from '@angular/material';

// Services
import { ProfileService } from '../../services/profile.service';
import { PostService } from '../../../post/services/post.service';
import { AuthHttpService } from '../../../account/services/auth-http.service';
import { ConnectionService } from '../../../connection/services/connection.service';

import { VOUserExt } from "../../../account/models/vouser";
import { VOPost } from '../../../../models/vos';

import { ModalPromptComponent } from '../../../shared/components/modal-prompt/modal-prompt.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class ProfileComponent implements OnInit {

    myUser: VOUserExt = new VOUserExt();
    person: VOUserExt = new VOUserExt();
    profileConnectionsCount: number;
    id: string;

    allianceInviteState: string = 'out';

    personPosts: VOPost[];

    constructor(
        private userService: AuthHttpService,
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private postService: PostService,
        private connectionService: ConnectionService,
        private dialog: MdDialog
    ) {
        //this.id = this.route.snapshot.params.id;
        //profileService.getProfileById(this.id);

        //profileService.person$.subscribe(res => this.person = res);
        //connectionService.getProfileConnectionsCount(this.id).subscribe(res => {
        //    this.profileConnectionsCount = res;
        //    console.log('profileConnectionsCount ', res);
        //});
    }

    ngOnInit() {
        this.userService.user$.subscribe(res => this.myUser = res);
        //this.postService.getPersonPosts(this.id);
        //this.postService.posts$.subscribe(posts => {
        //    console.log('Person posts', posts);
        //    this.personPosts = posts;
        //});
    }

    setConnection() {
        console.log('sender ', this.myUser.id);
        console.log('receiver ', this.id);
        let message: string;

        let dialogRef = this.dialog.open(ModalPromptComponent, { data: 'Connection message' });
        dialogRef.afterClosed().subscribe(msg => {
            console.log('msg', msg);
            if (msg) {
                this.connectionService.setConnection(this.myUser.id, this.id, msg);
            }
        });
        // console.log('this.person.id ', this.person.id);
        // this.profileService.setConnection(this.myUser.id, this.person.id);
    }

    onClickItem(item: VOPost) {
        this.postService.setSelectedPost(item);
    }

    openPromptDialog() {
        // let msg = prompt('Message', '');
        // console.log('msg', msg);
        let dialogRef = this.dialog.open(ModalPromptComponent, { data: 'Message' });
        dialogRef.afterClosed().subscribe(msg => {
            console.log('msg', msg);
            if (msg) {

            }
        });
        // this.dialogRef.afterClosed().subscribe(result => {
        //   if(result) {
        //     console.log('result confirm', result);
        //     // do confirmation actions
        //   }
        //   this.dialogRef = null;
        // });
    }

    inviteCancel(state) {
        this.allianceInviteState = state;
    }

    allianceInvite() {
        this.allianceInviteState = this.allianceInviteState === 'out' ? 'in' : 'out';
    }
}
