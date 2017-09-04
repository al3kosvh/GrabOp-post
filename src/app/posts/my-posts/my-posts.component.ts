import {Component, OnInit} from '@angular/core';
//import {VOPost} from '../../models/vos';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  size = 128;
  myItem:any = {};

  constructor() { }

  ngOnInit() {
  }

}
