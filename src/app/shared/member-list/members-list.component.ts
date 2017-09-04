/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'app-members-list',
  templateUrl: `./members-list.component.html`,
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  @Input() my_type: string;
  size: number = 256;
  title: string;
  total: number;
  constructor() {  }

  ngOnInit(): void {

    if (this.my_type == 'recommended') {
      this.title = 'Services Recommended by:';
    } else {
      this.title = 'Alliance Members:';
    }
  }

  loadServices(): void {

  }

}
