import { Component, OnInit } from '@angular/core';
import { VOService } from '../../../../models/vos';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-post-edit-tools',
    templateUrl: './post-edit-tools.component.html',
    styleUrls: ['./post-edit-tools.component.css']
})

export class PostEditToolsComponent implements OnInit {

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
