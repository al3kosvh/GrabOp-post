import { Component, OnInit, Input } from "@angular/core";
import { VOPost } from "../../../../models/vos";
import { PostService } from "../../../post/services/post.service";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  @Input() filters: Models.Filters;
  resultCant = 0;
  offeringsCant = 0;
  needsCant = 0;
  peopleCant = 0;
  posts: VOPost[];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    if (!this.filters) {
      this.filters = {
        search: '',
        country: '',
        province: '',
        city: '',
        businessStyle: {
          partnership: false,
          exchange: false,
          donate: false,
          internship: false,
          money: false
        },
        fixed: {
          start: '',
          end: ''
        },
        hourly: {
          start: '',
          end: ''
        },
        commission: {
          start: '',
          end: ''
        }
      };
    }

    this.advancedSearch();

  }

  advancedSearch() {

    this.postService.getPersonPosts('16').subscribe(posts => {
      if (posts) {
        this.posts = posts;
        this.resultCant = posts.length;
        for (let i in posts) {
         if (posts[i].type == "offer") {
           this.offeringsCant++;
         } else if (posts[i].type == "need") {
           this.needsCant++;
         }
        }
      }
    });

  }

}
