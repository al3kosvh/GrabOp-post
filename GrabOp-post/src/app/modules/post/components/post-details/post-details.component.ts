import { Component, Input, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

    @Input() post: VOPost;

    constructor() { }

    ngOnInit() {
        
    }

}
