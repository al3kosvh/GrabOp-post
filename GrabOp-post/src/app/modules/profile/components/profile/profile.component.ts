import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

// Services
import { ProfileService } from '../../services/profile.service';
import { PostService } from '../../../post/services/post.service';
import { AuthHttpService } from '../../../account/services/auth-http.service';
import { ConnectionService } from '../../../connection/services/connection.service';

import { VOUserExt } from "../../../account/models/vouser";
import { VOPost } from '../../../../models/vos';

import { ModalPromptComponent } from '../../../shared/components/modal-prompt/modal-prompt.component';
import { EditProfileDialogComponent } from './edit/edit-profile-dialog.component';

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
    isMyProfile = false;

    allianceInviteState: string = 'out';

    personPosts: VOPost[];
    shortName: string;
    backgroundPic = "#969696";
    private profileContainerMarginTop = -212;

    constructor(
        private userService: AuthHttpService,
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private postService: PostService,
        private connectionService: ConnectionService,
        private dialog: MdDialog
    ) {
        
    }

    ngOnInit() {

        this.userService.user$.subscribe(res => this.myUser = res);
        
        let backgroundPic = document.getElementById('backgroundPicProfile');

        let id = this.route.snapshot.paramMap.get('id');

        if (id) {
            // get person profile
            //this.profileService.getProfileById(id, [
            //    person => {
            //        this.person = person;
            //        console.log(person)
            //        this.shortName = this.person.firstName.toString().trim().charAt(0) + '.' + this.person.lastName.toString().trim().charAt(0);
            //        this.backgroundPic = this.person.background_pic ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.person.background_pic + ")" : this.backgroundPic;
            //        console.log("ProfileComponent person: ", this.person, this.person.background_pic, this.backgroundPic, backgroundPic)
            //    },
            //    err => {
            //        console.log("Error charging profile: ", err)
            //    },
            //    () => {
            //    }
            //])

            this.fixProfileContainerLayout();

        } else {
            // get my profile
            this.isMyProfile = true;
            this.profileService.getProfile().subscribe(profile => {
                console.log(profile);
                this.fixProfileContainerLayout();
            });
        }
        
    }

    private fixProfileContainerLayout(): void {
        if (this.shortName) {
            this.profileContainerMarginTop += -18;
        }
        if (this.person.phoneVisible) {
            this.profileContainerMarginTop += -13;
        }
        if (this.person.emailVisible) {
            this.profileContainerMarginTop += -13;
        }
    }

    editProfile(): void {
        let config: MdDialogConfig = {
            width: '400px',
            data: this.person
        };
        let dialogRef = this.dialog.open(EditProfileDialogComponent, config);
    }

    allianceInvite() {
        this.allianceInviteState = this.allianceInviteState === 'out' ? 'in' : 'out';
    }
}
