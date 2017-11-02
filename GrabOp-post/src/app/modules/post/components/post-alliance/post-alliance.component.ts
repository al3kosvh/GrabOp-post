import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

// Services
import { PostService } from '../../services/post.service';

// Models
import { VOPost } from '../../../../models/vos';

@Component({
    selector: 'post-alliance',
    templateUrl: './post-alliance.component.html',
    styleUrls: ['./post-alliance.component.css']
})

export class PostAllianceComponent implements OnInit {
    
    @Input() model: VOPost;
    @Output() onCancel = new EventEmitter();
    @Output() onNext = new EventEmitter<number>();
    @Output() onSave = new EventEmitter();
    categories: Models.Category[];

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
