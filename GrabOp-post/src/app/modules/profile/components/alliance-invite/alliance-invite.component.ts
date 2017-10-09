import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { VOUserExt } from '../../../account/models/vouser';
import { VOPost } from '../../../../models/vos';

// Services
import { PostService } from '../../../post/services/post.service';

@Component({
    selector: 'app-alliance-invite',
    templateUrl: './alliance-invite.component.html',
    styleUrls: ['./alliance-invite.component.css'],
    animations: [
        trigger('visible', [
            //state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(-100%)'}))
            ])
        ])
    ]
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
        //this.postService.getMyPosts().subscribe(
        //    posts => {
        //        console.log('alliance-invite myPosts', posts);
        //        this.myPosts = posts;
        //        // posts.forEach(function (item, i, arr) {
        //        //   if(!item.alliance){
        //        //     this.posts1[this.posts1.length] = item;
        //        //   }
        //        // });
        //    });
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
