import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { VOImage, VOPost, VOpost_attachment } from '../../../../models/vos';
// import {UploadService} from '../../myservices/upload-service';
import { PostService } from '../../services/post.service';
import { UploadService } from '../../../account/services/upload.service';

@Component({
    selector: 'post-media',
    templateUrl: './post-media.component.html',
    styleUrls: ['./post-media.component.css']
})

export class PostMediaComponent implements OnInit, OnChanges {

    @Input() model: VOPost;
    // images: VOImage[];
    attachments: VOpost_attachment[] = [];
    // attachments_ext: VOpost_attachment_ext[] = [];
    @Input() model_id: number;

    currentImage: VOImage;
    // @Output() selected$: EventEmitter<VOImage> = new EventEmitter<VOImage>();
    // private selected: VOImage;
    image_selected: VOpost_attachment;

    constructor(
        private uploadService: UploadService,
        private postService: PostService
    ) {
    }

    ngOnInit(): void {
        console.log('model', this.model);
        this.attachments = this.model.attachments;
        /*console.log(this.model);
         if(this.model.attachments){
         this.loadAttachments(this.model.id);
         //this.images = this.model.attachments.filter((item:VOImage)=>{return item.type=='image'})
         }
         else this.images=[];*/
    }

    ngOnChanges(obj: any): void {
        console.log('ngOnChanges', obj);
        // if (obj.model && obj.model.currentValue.id) {
        //   this.loadAttachments(obj.model.currentValue.id);
        // }
    }

    upload(input) {
        this.uploadService.upload(input)
            .subscribe(res => {
                console.log('upload res', res);
                res.parentid = this.model.id;
                this.attachments[this.attachments.length] = res;
                this.model.attachments = this.attachments;
                console.log('model upoad', this.model);
                // if(!this.attachments) this.attachments[0] = res;
                // else this.attachments[this.attachments.length] = res;
            });
    }

    onImageClick(image: VOpost_attachment): void {
        if (this.image_selected) this.image_selected.selected = false;
        image.selected = true;
        this.image_selected = image;

        // console.log('this.selected', this.selected);
        // this.selected$.emit(this.selected);
    }

    onDeleteClick(): void {
        // if (this.selected) {
        //   if (confirm('You want to delete?')) {
        //     this.postEditService.deleteAttachment(this.model.id, this.selected.id);
        //   }
        // }
        if (confirm('You want to delete?')) {
            this.model.attachments = this.attachments = this.attachments.filter(function (image) {
                return !image.selected;
            });
        }
    }

    saveAttachment(vo: VOImage): void {

        // this.postEditService.saveAttachment(vo, this.model.id).then(
        //   res => {
        //     if (res.insertId) {
        //       this.currentImage.id = res.insertId;
        //       if (!this.images) this.images = [];
        //       this.images.push(this.currentImage);
        //     }
        //     this.currentImage.dirty = false;
        //
        //     console.log(res);
        //   }
        // );
    }


    onImageUploadChange($evt): void {

        let files: FileList = $evt.target.files;
        if (files.length) {
            let form: FormData = new FormData();
            let file: File = files[0];
            form.append('file', file);
            // if (files[0].size < 2000000) {
            //   this.uploadSerevice.upload(form, 'post_attachments', this.model.id.toString()).done(res => {
            //     console.log(res);
            //     if (res.success == 'success') {
            //       let img: VOImage = new VOImage({src: res.result, type: 'image', posts_id: this.model.id, dirty: true});
            //       this.currentImage = img;
            //       this.saveAttachment(img);
            //       // this.model.attachments = this.images.length;
            //     }
            //   });
            // }
            // else alert('File should be less then 2 Megabite');
        }
    }

    // loadAttachments(id: number): void {
    //   this.postEditService.getAttachments(this.model.id).then(
    //     res => {
    //       this.images = res;
    //       console.log(res);
    //     });
    // }

}
