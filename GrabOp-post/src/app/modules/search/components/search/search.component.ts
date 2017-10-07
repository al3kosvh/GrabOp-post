import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
// Service
import { VOPost } from "../../../../models/vos";
import { PostService } from "../../../post/services/post.service";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    @Input() placeholder?: string;
    searchCtrl: FormControl;
    filteredPosts: Observable<VOPost[]>;

    posts: VOPost[];

    states: any[] = [
        {
            name: 'Arkansas',
            population: '2.978M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
            flag: ''
        },
        {
            name: 'California',
            population: '39.14M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
            flag: ''
        },
        {
            name: 'Florida',
            population: '20.27M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
            flag: ''
        },
        {
            name: 'Texas',
            population: '27.47M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
            flag: ''
        }
    ];

    constructor(
        private router: Router,
        private postService: PostService
    ) {
        this.searchCtrl = new FormControl();
        this.postService.getPersonPosts(16).subscribe(posts => {
            if (posts) {
                this.posts = posts;

                this.filteredPosts = this.searchCtrl.valueChanges
                    .startWith(null)
                    .map(post => post && typeof post === 'object' ? post.province : post)
                    .map(name => name ? this.filter(name) : this.posts.slice());

            }
        })
    }

    filter(name: string): VOPost[] {
        return this.posts.filter(option =>
            option.city.toLowerCase().indexOf(name.toLowerCase()) === 0
            || option.province.toLowerCase().indexOf(name.toLowerCase()) === 0
            || option.country.toLowerCase().indexOf(name.toLowerCase()) === 0
        );
    }

    onSubmit() {
        this.router.navigate(['/advanced-search', { search: this.searchCtrl.value }]);
    }
}
