import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { VOPost } from '../../../../models/vos';

@Component({
    selector: 'post-alliance',
    templateUrl: './post-alliance.component.html',
    styleUrls: ['./post-alliance.component.css']
})

export class PostAllianceComponent implements OnInit, OnChanges {
    @Input() model: VOPost;
    // @Input() model_id: number;

    constructor() { }

    ngOnChanges(obj: any): void { }

    ngOnInit(): void { }

}
