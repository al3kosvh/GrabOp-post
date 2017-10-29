import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VOPost } from '../../../../models/vos';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';

// Services
import { DialogService } from '../../../shared/services/dialog.service';
import { SidenavService } from '../../../../services/sidenav.service';
import { PostService } from '../../services/post.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';

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

    @Input() idPerson: string;

    postImage = 'assets/img/pic05-300x195.jpg';
    accountImage = 'assets/img/temp-users-img/6.jpg';

    accountIMG = '';
    // imgURL = 'url(img/img-girl.jpg)';
    constructor(
        private router: Router,
        private sidenavService: SidenavService,
        private snackBarService: SnackBarService,
        private postService: PostService,
        private dialog: DialogService
    ) {

    }

    ngOnInit() {

    }

    showOptions(event: MouseEvent) {
        this.trigger.openMenu();
    }

    onViewDetails() {
        this.router.navigate(['myposts/view/', this.post.id]);
    }

    onEdit() {
        this.sidenavService.onEditPost(this.post);
    }

    onDelete() {

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
}
