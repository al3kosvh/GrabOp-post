import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {VOPost} from '../../models/vos';

@Component({
  selector: 'app-post-edit-style',
  templateUrl: './post-edit-style.component.html',
  styleUrls: ['./post-edit-style.component.css']
})

export class PostEditStyleComponent implements OnInit, OnChanges {

@Input() model: VOPost;
@Input() model_id: number;

  constructor() {  }

  ngOnChanges(obj: any): void {  }

  ngOnInit(): void {  }

}
