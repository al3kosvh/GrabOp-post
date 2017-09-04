import {Component, Input, OnInit} from '@angular/core';
import {VOPost} from '../../models/vos';
// import {PostsService} from "../../posts/posts.service";
// import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent implements OnInit {

  @Input() post: VOPost;
  @Input() editButton: boolean;
  @Input() viewDetailsButton: boolean;
  @Input() viewMyDetailsButton: boolean;

  @Input() idPerson: string;

  urlIMG = 'assets/img/pic05-300x195.jpg';
  imgURL = 'url(assets/img/ingeniero.jpg)';
  accountIMG = '';
  // imgURL = 'url(img/img-girl.jpg)';
  size = 256;
  constructor(
   // private postsService: PostsService,
              // router: Router,
              // route: ActivatedRoute) {
              ) {

  }

  ngOnInit() {
    // this.postsService
  }

}
