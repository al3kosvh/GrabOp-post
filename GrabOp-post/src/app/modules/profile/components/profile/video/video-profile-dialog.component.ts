import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

// Services
import { ProfileService } from '../../../services/profile.service';
import { UploadService } from '../../../../account/services/upload.service';

@Component({
    selector: 'video-profile-dialog',
    templateUrl: './video-profile-dialog.component.html',
    styleUrls: ['./video-profile-dialog.component.css']
})
export class VideoProfileDialogComponent {

    videoLink: string;

    constructor(public dialogRef: MdDialogRef<VideoProfileDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: string) {
        this.videoLink = data;
    }

    onClose(): void {
        this.dialogRef.close();
    }

}
