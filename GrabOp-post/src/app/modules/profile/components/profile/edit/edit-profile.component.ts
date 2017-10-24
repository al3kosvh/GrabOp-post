import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import { VOUserExt } from '../../../../account/models/vouser';

// Services
import { ProfileService } from '../../../services/profile.service';
import { UploadService } from '../../../../account/services/upload.service';

@Component({
    selector: 'edit-profile-dialog',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

    errorMessage: string;
    loading: boolean;
    @Input() profile: Models.VOUserExt;
    occupations = [
        { value: 1, name: "Self Employed" },
        { value: 2, name: "Company" },
        { value: 3, name: "Seeking an Opportunity" },
        { value: 4, name: "Other" },
    ];
    iconFileResume = "assets/img/docx.png";
    fileResume: object;

    fruits = [
        { name: 'Lemon' },
        { name: 'Lime' },
        { name: 'Apple' },
    ];

    constructor(
        private profileService: ProfileService,
        private uploadService: UploadService
    ) {
        this.loading = false;
    }

    onSubmit(): void {
        this.loading = true;
        this.profileService.updateProfile(this.profile).subscribe(
            success => {
                console.log("EditProfileDialog success", success);
                // TODO update the original profile on view
            },
            err => {
                console.log("EditProfileDialog err: ", err)
            },
            () => {
                this.loading = false;
            }
        )
    }

    resetCompany(): void {
        if (!this.profile.occupation || this.profile.occupation !== 2) {
            this.profile.company = '';
        }
    }

    onUpLoadFile(event): void {
        if (event.target.files) {
            this.uploadService.uploadFile(event.target.files[0]).subscribe(
                dataFile => {
                    console.log("EditProfileDialog dataFile: ", dataFile)
                },
                err => {
                    console.log("EditProfileDialog err: ", err.json())
                },
                () => {

                }
            )
        }
    }

    onUpLoadProfilePic(event): void {
        if (event.target.files) {
            this.uploadService.uploadFile(event.target.files[0]).subscribe(
                dataFile => {
                    console.log("EditProfileDialog dataProfilePic: ", dataFile)
                },
                err => {
                    console.log("EditProfileDialog err: ", err.json())
                },
                () => {

                }
            )
        }
    }

    onUpLoadProfileVideo(event): void {
        if (event.target.files) {
            this.uploadService.uploadFile(event.target.files[0]).subscribe(
                dataFile => {
                    console.log("EditProfileDialog dataProfileVideo: ", dataFile)
                },
                err => {
                    console.log("EditProfileDialog err: ", err.json())
                },
                () => {

                }
            )
        }
    }

    onUpLoadProfileBackgroundPic(event): void {
        if (event.target.files) {
            this.uploadService.uploadFile(event.target.files[0]).subscribe(
                dataFile => {
                    console.log("EditProfileDialog dataProfileBackgroundPic: ", dataFile)
                },
                err => {
                    console.log("EditProfileDialog err: ", err.json())
                },
                () => {

                }
            )
        }
    }

    addSkill(): void {
        this.profile.skillset = this.profile.skillset ? this.profile.skillset : [];
        this.profile.skillset.push(""); console.log('skills======', this.profile.skillset)
    }

    deleteSkill(index): void {
        this.profile.skillset.splice(index, 1);
    }

    /*onchangeSkill(event, index): void {
        event.preventDefault();
        this.profile.skillset[index] = event.target.value;
        console.log('onchange', index, event.target.value, this.profile.skillset);
    }*/

    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our person
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit: any): void {
        let index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

}
