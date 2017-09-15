import { Component, Input, OnInit } from '@angular/core';
import { VOPost } from '../../models/vos';
import { VOUserExt } from '../../app-login/vouser';

@Component({
    selector: 'app-post-info',
    templateUrl: './post-info.component.html',
    styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

    @Input() post: VOPost;
    @Input() person: VOUserExt;

    constructor() { }

    ngOnInit() {

    }

}