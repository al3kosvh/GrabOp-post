import {Component, Inject, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {VOUserExt} from '../../../../account/models/vouser';

// Services
import {ProfileService} from '../../../services/profile.service';
import {UploadService} from '../../../../account/services/upload.service';

@Component({
  selector: 'edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent {

  private errorMessage: string;
  private loading: boolean;
  private profile: VOUserExt;
  occupations = [
    {value: 0, name: "Company"},
    {value: 1, name: "Self Employed"},
    {value: 2, name: "Seeking an Opportunity"},
    {value: 3, name: "Other"},
  ];
  iconFileResume = "assets/img/docx.png";
  fileResume: object;

  constructor(
    public dialogRef: MdDialogRef<EditProfileDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private profileService: ProfileService, private uploadService: UploadService) {
    this.loading = false;
    this.profile = data;
  }

  onSubmit(): void {
    this.loading = true;
    this.profileService.editProfile(this.profile).subscribe(
      success => {
        console.log("EditProfileDialog success", success);
        this.fileResume = success;
      },
      err => {
        console.log("EditProfileDialog err: ", err)
      },
      () => {
        this.loading = false;
      }
    )
  }

  onClose(): void {
    this.dialogRef.close();
  }

  resetCompany(): void {
    if (!this.profile.occupation) {
      this.profile.company = '';
    }
  }

  onUpLoadFile(event): void {console.log(event)
    this.uploadService.upload(event).subscribe(
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

  addSkill(): void {
    this.profile.skillset = this.profile.skillset ? this.profile.skillset : [];
    this.profile.skillset.push("");
  }

  deleteSkill(index): void {
    this.profile.skillset.splice(index, 1);
  }

  onchangeSkill(event, index): void {
    event.preventDefault();
    this.profile.skillset[index] = event.target.value;
  }

}
