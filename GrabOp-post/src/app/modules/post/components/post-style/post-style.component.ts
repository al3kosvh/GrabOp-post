import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { VOPost } from '../../../../models/vos';

// Enums
import { PostAction } from '../../models/post-action.enum';

@Component({
    selector: 'post-style',
    templateUrl: './post-style.component.html',
    styleUrls: ['./post-style.component.css']
})

export class PostStyleComponent implements OnInit {

    @Input() model: VOPost;
    @Input() action: number;
    @Output() onCancel = new EventEmitter();
    @Output() onNext = new EventEmitter<number>();
    @Output() onSave = new EventEmitter();
    postAction = PostAction;

    constructor() { }

    ngOnInit(): void { }

    onNextClick() {
        this.onNext.emit(2);
    }

    onCancelClick() {
        this.onCancel.emit();
    }

    onSaveClick() {
        this.onSave.emit();
    }

}
