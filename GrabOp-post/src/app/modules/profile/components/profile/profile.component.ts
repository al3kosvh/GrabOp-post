import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

// Services
import {ProfileService} from '../../services/profile.service';
import {PostService} from '../../../post/services/post.service';
import {AuthHttpService} from '../../../account/services/auth-http.service';
import {ConnectionService} from '../../../connection/services/connection.service';

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
  person: VOUserExt = new VOUserExt();
  profileConnectionsCount: number;
  id: string;
  isMyProfile = false;

  allianceInviteState: string = 'out';

  personPosts: VOPost[];
  shortName = "";
  backgroundPic = "#969696";

  constructor(private userService: AuthHttpService,
              private route: ActivatedRoute,
              private profileService: ProfileService,
              private postService: PostService,
              private connectionService: ConnectionService,
              private dialog: MdDialog) {

  }

  ngOnInit() {
    this.userService.user$.subscribe(res => this.myUser = res);

    this.isMyProfile = true;
    let backgroundPic = document.getElementById('backgroundPicProfile');

    this.profileService.getProfileById("16", [
      person => {
        this.person = person;
        this.shortName = this.person.firstName.toString().trim().charAt(0) + '.' + this.person.lastName.toString().trim().charAt(0);
        this.backgroundPic = this.person.background_pic ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.person.background_pic + ")": this.backgroundPic;
        console.log("ProfileComponent person: ", this.person, this.person.background_pic, this.backgroundPic, backgroundPic)
      },
      err => {
        console.log("Error charging profile: ", err)
      },
      () => {
      }
    ])
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
