import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VOCategory, VOPost } from '../../../../models/vos';

// Services
import { PostService } from '../../services/post.service';

// Enums
import { PostAction } from '../../models/post-action.enum';

@Component({
    selector: 'post-basic',
    templateUrl: './post-basic.component.html',
    styleUrls: ['./post-basic.component.css']
})

export class PostBasicComponent implements OnInit {

    @Input() model: VOPost;
    @Input() action: PostAction;
    @Output() onCancel = new EventEmitter();
    @Output() onNext = new EventEmitter<number>();
    @Output() onSave = new EventEmitter();
    categories: Models.Category[];
    postAction = PostAction;

    constructor(
        private postService: PostService
    ) { }

    ngOnInit(): void {
      this.postService.getCategories().subscribe(categories => this.categories = categories);        
    }

    onNextClick() {
        this.onNext.emit(1);
    }

    onCancelClick() {        
        this.onCancel.emit();
    }

    onSaveClick() {       
        this.onSave.emit();
    }
}
