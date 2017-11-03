import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';

// Services
import { DialogService } from '../../../shared/services/dialog.service';
import { SidenavService } from '../../../../services/sidenav.service';
import { PostService } from '../../services/post.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';
import { AuthenticationService } from '../../../account/services/authentication.service';
import { ProfileService } from '../../../profile/services/profile.service';

@Component({
    selector: 'post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    @Input() post: VOPost;
    @Input() editButton: boolean;
    @Input() viewDetailsButton: boolean;
    @Input() viewMyDetailsButton: boolean;
    
    postImage = 'assets/img/pic05-300x195.jpg';
    accountImage = 'assets/img/avatar.gif';

    canHide: boolean = false;
    canShow: boolean = false;
    canEdit: boolean = false;
    canDuplicate: boolean = true;
    canShare: boolean = true;
    canEditAlliance: boolean;
    canDelete: boolean = false;
    canJoinAlliance: boolean = false;
    
    // imgURL = 'url(img/img-girl.jpg)';
    constructor(
        private router: Router,
        private sidenavService: SidenavService,
        private snackBarService: SnackBarService,
        private postService: PostService,
        private dialog: DialogService,
        private authService: AuthenticationService,
        private profileService: ProfileService
    ) {

    }

    ngOnInit() {
        this.checkPermissions();
    }

    checkPermissions(): void {
        this.authService.getUser().subscribe(user => {

            if (user && (user.id == this.post.creatorId)) {
                if (user.profileImage) this.accountImage = user.profileImage;
                this.canEdit = true;
                this.canDelete = true;               
                if (this.post.type == 'offer') this.canEditAlliance = true;
            } else {
                this.profileService.getProfileById(this.post.ownerId).subscribe(person => {
                    if (person.profileImage) this.accountImage = person.profileImage;
                });
                if (this.post.type == 'offer') this.canJoinAlliance = true;
            }

        });
    }

    showOptions(event: MouseEvent): void {
        this.trigger.openMenu();
    }

    onViewDetails(): void {
        this.router.navigate(['myposts/view/', this.post.id]);
    }

    onEdit(): void {
        this.sidenavService.onEditPost(this.post);
    }

    onEditAlliance(): void {
        this.sidenavService.onEditPost(this.post, 3);
    }

    onDelete(): void {

        let data = {
            title: 'Delete Service',
            body: 'Are you sure?'
        }

        this.dialog.openConfirm(data, res => {
            if (res == true) {
                this.postService.deleteService(this.post.id).subscribe(result => {
                    this.snackBarService.showMessage('Service deleted!', 'Undo').onAction().subscribe(() => {
                        console.log('Undo');
                    });
                });
            }
        });
    }

    onHide(): void {

        let data = {
            title: 'Hide Service',
            body: 'Are you sure?'
        }

        this.dialog.openConfirm(data, res => {
            if (res == true) {
                this.postService.hideService(this.post.id).subscribe(result => {
                    this.snackBarService.showMessage('Service hidden!', 'Undo').onAction().subscribe(() => {
                        console.log('Undo');
                    });
                });
            }
        });
    }

    onShow(): void {

        let data = {
            title: 'Show Service',
            body: 'Are you sure?'
        }

        this.dialog.openConfirm(data, res => {
            if (res == true) {
                this.postService.showService(this.post.id).subscribe(result => {
                    this.snackBarService.showMessage('Service show!', 'Undo').onAction().subscribe(() => {
                        console.log('Undo');
                    });
                });
            }
        });
    }

    onDuplicate(): void {
        let data = {
            title: 'Duplicate Service',
            body: 'Are you sure?'
        }

        this.dialog.openConfirm(data, res => {
            if (res == true) {
                this.postService.duplicatePost(this.post).subscribe(result => {
                    this.snackBarService.showMessage('Service duplicated!', 'Undo').onAction().subscribe(() => {
                        console.log('Undo');
                    });
                });
            }
        });
    }
}
