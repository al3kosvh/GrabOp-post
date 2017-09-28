import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

// Services
import {ProfileService} from '../../services/profile.service';
import {PostService} from '../../../post/services/post.service';
import {AuthHttpService} from '../../../account/services/auth-http.service';
import {ConnectionService} from '../../../connection/services/connection.service';
import {MyPostsService} from '../../../post/services/my-posts.service';

import {VOUserExt} from "../../../account/models/vouser";
import {VOPost} from '../../../../models/vos';

import {ModalPromptComponent} from '../../../shared/components/modal-prompt/modal-prompt.component';
import {EditProfileDialogComponent} from './edit/edit-profile-dialog.component';

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
  profile: VOUserExt = new VOUserExt();
  profileConnectionsCount = 0;
  id: string;
  isMyProfile = true;

  allianceInviteState: string = 'out';

    profilePosts: VOPost[];
    shortName: string;
    backgroundPic = "#969696";
    profilePic = "";
    private profileContainerMarginTop = -212;

  constructor(private userService: AuthHttpService,
              private myPostsService: MyPostsService,
              private route: ActivatedRoute,
              private profileService: ProfileService,
              private postService: PostService,
              private connectionService: ConnectionService,
              private dialog: MdDialog) {

  }

  ngOnInit() {
    this.userService.user$.subscribe(res => {
      this.myUser = res;
      this.startCmp();
    });
  }

  startCmp() {
    if (this.myUser) {
      const id = this.route.snapshot.paramMap.get('id');
      this.isMyProfile = (typeof id === 'string' && id === this.myUser.id.toString()) || (typeof id === 'object' || id === null);
      this.profileService.getProfileById(this.isMyProfile ? this.myUser.id.toString() : id).subscribe(
        profile => {
          this.initProfile(profile);
        }, err => {
          console.log("Error charging profile: ", err)
        }, () => {
        });
    }
  }

  initProfile(profile): void {
    if (typeof profile !== 'undefined' && profile.id) {
      this.profile = profile;
      this.shortName = (typeof this.profile.firstName === 'string' ? this.profile.firstName.trim().charAt(0) + '.' : '') + (typeof this.profile.lastName === 'string' ? this.profile.lastName.trim().charAt(0) : '');
      this.backgroundPic = typeof this.profile.background_pic !== 'undefined' ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.profile.background_pic + ")" : this.backgroundPic;
      this.profilePic = typeof this.profile.profile_pic !== 'undefined' && this.profile.profile_pic !== '' ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.profile.profile_pic + ")" : this.profilePic;
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
      if (this.person.phoneVisible) {
          this.profileContainerMarginTop += -13;
      }
      if (this.person.emailVisible) {
          this.profileContainerMarginTop += -13;
      }
  }
}
