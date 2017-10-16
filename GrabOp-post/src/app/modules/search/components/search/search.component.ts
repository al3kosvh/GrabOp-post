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
  @Input() icon?: string; // prefix, suffix

  posts: VOPost[];

  states: any[] = [];

  constructor(private router: Router,
              private postService: PostService) {
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
    if (this.searchCtrl.value && this.searchCtrl.value.toString().trim()) {
      this.router.navigate(['/advanced-search', {search: this.searchCtrl.value}]);
    } else {
      this.router.navigate(['/advanced-search']);
    }
  }

  onKeyUp(event) {
    if (event.keyCode == 27) {
      this.searchCtrl.reset();
      this.onSubmit();
    }
  }

}
