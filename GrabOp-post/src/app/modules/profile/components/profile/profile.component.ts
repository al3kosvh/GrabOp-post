import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

// Services
import { ProfileService } from '../../services/profile.service';
import { PostService } from '../../../post/services/post.service';
import { AuthHttpService } from '../../../account/services/auth-http.service';
import { ConnectionService } from '../../../connection/services/connection.service';
//import { MyPostsService } from '../../../post/services/my-posts.service';

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

    private profile: VOUserExt = new VOUserExt();
    private profileConnectionsCount = 0;
    private isMyProfile;

    private allianceInviteState: string = 'out';

    private profilePosts: VOPost[];
    private shortName: string;
    private backgroundPic = "#969696";
    private profilePic = "assets/img/avatar.png";
    private profileContainerMarginTop = -212;

    constructor(
        private userService: AuthHttpService,
        //private myPostsService: MyPostsService,
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private postService: PostService,
        private connectionService: ConnectionService,
        private dialog: MdDialog
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.loadProfile(params['id']);
            } else {
                this.loadMyProfile();
            }
        })
        //this.userService.user$.subscribe(res => {
        //    this.myUser = res;
        //    this.startCmp();
        //});
    }

    loadProfile(id: string) {
        this.profileService.getProfileById(id).subscribe(
            profile => {
                this.initProfile(profile);
            },
            err => {
                console.log("Error charging profile: ", err)
            },
            () => {
            }
        );
    }

    loadMyProfile() {
        this.profileService.getProfile().subscribe(
            profile => {
                this.initProfile(profile);
                this.isMyProfile = true;
            },
            err => {
                console.log("Error charging profile: ", err)
            },
            () => {
            }
        )
    }

    //startCmp() {
    //    if (this.myUser) {
    //        const id = this.route.snapshot.paramMap.get('id');
    //        this.isMyProfile = (typeof id === 'string' && id === this.myUser.id.toString()) || (typeof id === 'object' || id === null);
    //        this.profileService.getProfileById(this.isMyProfile ? this.myUser.id.toString() : id).subscribe(
    //            profile => {
    //                this.initProfile(profile);
    //            }, err => {
    //                console.log("Error charging profile: ", err)
    //            }, () => {
    //            });
    //    }
    //}

    initProfile(profile): void {
       
            this.profile = profile;
            this.shortName = ( this.profile.firstName ? this.profile.firstName.trim().charAt(0) + '.' : '') + ( this.profile.lastName ? this.profile.lastName.trim().charAt(0) : '');
            this.backgroundPic = this.profile.background_pic ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.profile.background_pic + ")" : this.backgroundPic;
            this.profilePic = this.profile.profile_pic ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.profile.profile_pic + ")" : this.profilePic;
            console.log("ProfileComponent profile: ", this.profile, this.shortName);

            this.postService.getPersonPosts(this.profile.id).subscribe(posts => {
                if (posts) {
                    this.profilePosts = posts;
                }
            });

            this.connectionService.getProfileConnectionsCount(this.profile.id).subscribe(
                profileConnectionsCount => {
                    if (profileConnectionsCount) {
                        this.profileConnectionsCount = profileConnectionsCount
                    }
                }
            );
            this.fixProfileContainerLayout();        
    }

    editProfile(): void {
        let config: MdDialogConfig = {
            width: '400px',
            data: this.profile
        };
        let dialogRef = this.dialog.open(EditProfileDialogComponent, config);
    }

    allianceInvite() {
        this.allianceInviteState = this.allianceInviteState === 'out' ? 'in' : 'out';
    }

    private fixProfileContainerLayout(): void {
        if (this.shortName) {
            this.profileContainerMarginTop += -18;
        }
        if (this.profile.phoneVisible) {
            this.profileContainerMarginTop += -13;
        }
        if (this.profile.emailVisible) {
            this.profileContainerMarginTop += -13;
        }
    }
}
