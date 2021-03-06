import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatExpansionPanel, MatMenuTrigger } from '@angular/material';
// Services
import { ProfileService } from '../../services/profile.service';
import { PostService } from '../../../post/services/post.service';
import { AuthenticationService } from '../../../account/services/authentication.service';
import { ConnectionService } from '../../../connection/services/connection.service';
import { SidenavService } from '../../../../services/sidenav.service';
import { VOUserExt } from "../../../account/models/vouser";
import { VOPost } from '../../../../models/vos';
import { VideoProfileDialogComponent } from './video/video-profile-dialog.component';

//import { MyPostsService } from '../../../post/services/my-posts.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

    profile: VOUserExt = new VOUserExt();
    profileConnectionsCount = 0;
    myUser: Models.VOUserExt;
    isMyProfile: boolean;

    allianceInviteState: string = 'out';

    profileOfferPosts: VOPost[];
    profileNeedPosts: VOPost[];
    shortName: string;
    backgroundPic = "#969696";
    profilePic = "assets/img/avatar.gif";
    profileContainerMarginTop = -212;
    btnConnectValue: string;
    myConnections: Models.VOConnection[];
    indexConnection: any;
    @ViewChild(MatMenuTrigger) toggleTrigger: MatMenuTrigger;
    rotate = false;

    constructor(
        private userService: AuthenticationService,
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private postService: PostService,
        private connectionService: ConnectionService,
        private dialog: MatDialog,
        private router: Router,
        private sidenavService: SidenavService
    ) {

    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.loadProfile(params['id']);
            } else {
                this.loadMyProfile();
            }
        })
    }

    ngOnDestroy() {

    }

    openTriggerConnection() {
        this.rotate = true;
        this.toggleTrigger.openMenu();
    }

    closeMenuConnection() {
        this.rotate = false;
    }

    inviteToAlliance() {
        this.sidenavService.inviteToAlliance(this.profile);
    }

    loadProfile(id: number) {
        this.profileService.getProfileById(id).subscribe(
            profile => {
                this.initProfile(profile);
                this.isMyProfile = false;
            },
            err => {
                console.log("Error charging profile: ", err)
            },
            () => {
            }
        );
    }

    private loadMyProfile() {
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

    private initProfile(profile): void {

        this.profile = profile;
        this.shortName = (this.profile.firstName ? this.profile.firstName.trim().charAt(0) + '.' : '') + (this.profile.lastName ? this.profile.lastName.trim().charAt(0) : '');
        this.backgroundPic = this.profile.backgroundImage ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.profile.backgroundImage + ")" : this.backgroundPic;
        this.profilePic = this.profile.profileImage ? 'url(https://res.cloudinary.com/al3kosvh/image/upload/t_thumbnail/v1468698749/' + this.profile.profileImage + ")" : this.profilePic;

        this.validateConnection();

        this.postService.getPersonPosts(this.profile.id).subscribe(
            posts => {
                if (posts) {
                    this.profileNeedPosts = posts.filter(post => post.type == 'need');
                    this.profileOfferPosts = posts.filter(post => post.type == 'offer');
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
        this.sidenavService.onEditProfile(this.profile);
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

    playVideo() {
        let config: MatDialogConfig = {
            width: '400px',
            data: this.profile.video || 'http://localhost:8080/video/AviciiAddictedToYou.mp4'
        };
        this.dialog.open(VideoProfileDialogComponent, config);
    }

    private validateConnection() {
        if (!this.isMyProfile) {
            this.connectionService.getMyConnections().subscribe(
                connections => {
                    this.myConnections = connections;
                    this.indexConnection = -1;
                    for (let i in this.myConnections) {
                        if (this.profile.id == this.myConnections[i].id) {
                            this.indexConnection = i;
                            break;
                        }
                    }

                    this.btnConnectValue = 'connect';
                    if(this.indexConnection != -1 && this.profile.id == this.myConnections[this.indexConnection].id) {
                        this.btnConnectValue = this.myConnections[this.indexConnection].connectionStatus == 1 ? 'request send' : 'connected';
                    } else if (this.indexConnection != -1) {
                        this.btnConnectValue = this.myConnections[this.indexConnection].connectionStatus == 1 ? 'request received' : 'connected';
                    }
                }
            );
        }
    }

  confirmConnection(accept: boolean, expansion: MatExpansionPanel) {
      if (expansion) {
          expansion.close();
      }
      this.checkUser(
        () => {
            this.connectionService.confirmConnection(this.myConnections[this.indexConnection].connectionId, accept).subscribe(
                respond => {
                    this.btnConnectValue = respond.status === 3 ? 'connected' : 'connect';
                }
            )
        })
  }

  deleteConnection(expansion: MatExpansionPanel) {
      if (expansion) {
          expansion.close();
      }
      this.checkUser(
        () => {
            this.connectionService.deleteConnection(this.myConnections[this.indexConnection].connectionId).subscribe(
                respond => {
                    this.btnConnectValue = 'connect';
                }
            )
        })
  }

  setConnection() {
      let me = this,
          cmp = this.sidenavService.setConnection(
              this.myUser.id,
              this.profile.id,
              this.profile.displayName,
              respond => {
                  me.btnConnectValue = respond.status === 1 ? 'request send' : 'connect';
                  cmp.sidenav.close();
              }
          );
  }

  checkUser(cb) {
    if (this.myUser) {
      cb()
    } else {
      this.userService.getUser().subscribe(
        user => {
          this.myUser = user;
          cb()
        }
      )
    }
  }

  openMessage() {
    this.checkUser(
      () => {
        this.sidenavService.onMessage({
          id: this.myUser.id,
          senderid: this.profile.id,
          senderName: this.profile.firstName
        });
      })
  }

}
