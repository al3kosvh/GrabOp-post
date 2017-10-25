import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VOCategory, VOPost } from '../../../../models/vos';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'post-basic',
    templateUrl: './post-basic.component.html',
    styleUrls: ['./post-basic.component.css']
})

export class PostBasicComponent implements OnInit {

    @Input() model: VOPost;
    @Output() onCancel = new EventEmitter<number>();
    @Output() onNext = new EventEmitter();
    categories: Models.Category[];

    constructor(
        private postService: PostService
    ) {
       
    }

    ngOnInit(): void {
      this.postService.getCategories().subscribe(categories => this.categories = categories);        
    }

    onNextClick() {
        this.onNext.emit(1);
        console.log(this.model);
    }

    onCancelClick() {        
        this.onCancel.emit();
    }
}
