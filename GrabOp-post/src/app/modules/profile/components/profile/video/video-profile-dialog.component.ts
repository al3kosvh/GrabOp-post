import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Services
import { ProfileService } from '../../../services/profile.service';
import { UploadService } from '../../../../shared/services/upload.service';

@Component({
    selector: 'video-profile-dialog',
    templateUrl: './video-profile-dialog.component.html',
    styleUrls: ['./video-profile-dialog.component.css']
})
export class VideoProfileDialogComponent {

    videoLink: string;

    constructor(
        public dialogRef: MatDialogRef<VideoProfileDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string
    ) {
        this.videoLink = data;
    }

    onClose(): void {
        this.dialogRef.close();
    }

}
