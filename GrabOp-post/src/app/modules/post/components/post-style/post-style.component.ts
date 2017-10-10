import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { VOPost } from '../../../../models/vos';

@Component({
    selector: 'post-style',
    templateUrl: './post-style.component.html',
    styleUrls: ['./post-style.component.css']
})

export class PostStyleComponent implements OnInit, OnChanges {

    @Input() model: VOPost;
    @Input() model_id: number;

    constructor() { }

    ngOnChanges(obj: any): void { }

    ngOnInit(): void { }

}
