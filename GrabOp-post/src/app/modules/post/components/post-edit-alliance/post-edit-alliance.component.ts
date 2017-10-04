import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { VOPost } from '../../../../models/vos';

@Component({
    selector: 'app-post-edit-alliance',
    templateUrl: './post-edit-alliance.component.html',
    styleUrls: ['./post-edit-alliance.component.css']
})

export class PostEditAllianceComponent implements OnInit, OnChanges {
    @Input() model: VOPost;
    // @Input() model_id: number;

    constructor() { }

    ngOnChanges(obj: any): void { }

    ngOnInit(): void { }

}
