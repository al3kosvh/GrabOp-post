import { Component, OnInit } from '@angular/core';
import { VOService } from '../../../../models/vos';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'post-tools',
    templateUrl: './post-tools.component.html',
    styleUrls: ['./post-tools.component.css']
})

export class PostToolsComponent implements OnInit {

    currentService: VOService;

    constructor(
        private postService: PostService
    ) {

        /* myService.myService.subscribe(
           service => {
             this.currentService = service;
             console.log(service);
           }
         );*/
    }

    ngOnInit(): void {
        // this.loadService();
    }
}
