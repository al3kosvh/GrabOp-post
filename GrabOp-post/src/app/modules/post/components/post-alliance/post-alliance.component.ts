import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

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

    formControl = new FormControl();
    people: Models.VOUserExt[];
    filteredPeople: Observable<Models.VOUserExt[]>;

    constructor(
        private postService: PostService
    ) {
        //for test
        this.people = [
            { displayName: "Omar Arturo", profileImage: "assets/img/temp-users-img/6.jpg" },
            { displayName: "Lisvany la Figura", profileImage: "assets/img/temp-users-img/6.jpg" },
            { displayName: "Eniel Rodriguez", profileImage: "assets/img/temp-users-img/6.jpg" }
        ] as Models.VOUserExt[];
    }

    ngOnInit(): void {
        this.postService.getCategories().subscribe(categories => this.categories = categories);

        this.filteredPeople = this.formControl.valueChanges
            .startWith(null)
            .map(user => user && typeof user === 'object' ? user.displayName : user)
            .map(name => name ? this.filter(name) : this.people.slice());
    }

    filter(name: string): Models.VOUserExt[] {
        return this.people.filter(user =>
            user.displayName.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    displayFn(user: Models.VOUserExt): string {
        return user ? user.displayName : "";
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
