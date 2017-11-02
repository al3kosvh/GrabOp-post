
import { Component, Input } from '@angular/core';

import { VOPost } from '../../../../models/vos';

import * as $ from 'jquery';

@Component({
    selector: 'post-frames',
    templateUrl: 'post-frames.component.html',
    styleUrls: ['post-frames.component.css']
})
export class PostsFramesComponent {

    @Input() posts: VOPost[];
    canAnimation = true;

    constructor() { }

    onScrollLeft(container) {
        if (this.canAnimation) {
            this.canAnimation = false;
            $(container).animate({
                scrollLeft: '-=' + (window.innerWidth / 2)
            }, 'slow', null, () => {
                this.canAnimation = true;
            });
        }
    }

    onScrollRight(container) {
        if (this.canAnimation) {
            this.canAnimation = false;
            $(container).animate({
                scrollLeft: '+=' + (window.innerWidth / 2)
            }, 'slow', null, () => {
                this.canAnimation = true;
            });
        }
    }
}
