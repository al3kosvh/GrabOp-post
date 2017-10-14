import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { VOCategory, VOPost } from '../../../../models/vos';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'post-basic',
    templateUrl: './post-basic.component.html',
    styleUrls: ['./post-basic.component.css']
})

export class PostBasicComponent implements OnInit, OnChanges {

    isFormValid: boolean;

    @Input() model: VOPost;
    @Input() model_id: number;
    @Output() f: boolean;
    categories: Models.Category[];

    constructor(
        private postService: PostService
    ) {
        //this.postEditService.getCategories().then( res => this.categories = res);
    }

    ngOnChanges(obj: any): void {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();

    }
    ngOnInit(): void {
      this.postService.getCategories().subscribe(categories => this.categories = categories);        
    }

    loadService(): void {
        /*console.log('loadService()' +this.my_service_id)
         if(isNaN(this.my_service_id)) return;
         this.myService.getPostById(this.my_service_id).subscribe(
         res=>{
         this.currentService = res;
         //console.log(services);
         }
         )*/
    }

}
