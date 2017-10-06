import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VOUserExt } from '../../../account/models/vouser';
import { VOPost } from '../../../../models/vos';
import { PostService } from '../../../post/services/post.service';

@Component({
    selector: 'app-alliance-invite',
    templateUrl: './alliance-invite.component.html',
    styleUrls: ['./alliance-invite.component.css']
})
export class AllianceInviteComponent implements OnInit {

    @Input() person: VOUserExt;
    myPosts: VOPost[];

    posts1: VOPost[];
    posts2: VOPost[];

    model: any = new Object({});

    @Output() state = new EventEmitter<string>();

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
        /*this.postService.myPosts$.subscribe(posts => {
            console.log('alliance-invite myPosts', posts);
            this.myPosts = posts;
            // posts.forEach(function (item, i, arr) {
            //   if(!item.alliance){
            //     this.posts1[this.posts1.length] = item;
            //   }
            // });
        });*/
        // this.posts.forEach(function (item, i, arr) {
        //   if(!item.alliance){
        //     this.posts1[this.posts1.length] = item;
        //   }
        // });

    }

    cancelInvitatio() {
        this.state.emit('out');
    }

    sendInvitation() {
        console.log('sendInvitation');
    }

}
