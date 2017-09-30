import {Component, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
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
    {value: 1, name: "Self Employed"},
    {value: 2, name: "Company"},
    {value: 3, name: "Seeking an Opportunity"},
    {value: 4, name: "Other"},
  ];
  iconFileResume = "assets/img/docx.png";
  fileResume: object;

  constructor(public dialogRef: MdDialogRef<EditProfileDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private profileService: ProfileService,
              private uploadService: UploadService) {
    this.loading = false;
    // with this not replicate the values, only after save update values
    this.profile = {
      id: data.id,
      sessionId: data.sessionId,
      userId: data.userId,
      role: data.role,
      username: data.username,
      password: data.password,
      primaryEmail: data.primaryEmail,
      emailVisible: data.emailVisible,
      displayName: data.displayName,
      token: data.token,
      isLogin: data.isLogin,
      firstName: data.firstName,
      lastName: data.lastName,
      background_pic: data.background_pic,
      video: data.video,
      resume: data.resume,
      province: data.province,
      city: data.city,
      country: data.country,
      latitude: data.latitude,
      longitude: data.longitude,
      skillset: data.skillset,
      interests: data.interests,
      profile_pic: data.profile_pic,
      jobtitle: data.jobtitle,
      company: data.company,
      occupation: data.occupation,
      url: data.url,
      description: data.description,
      phoneNumber: data.phoneNumber,
      phoneVisible: data.phoneVisible,
      distance: data.distance,
      offers: data.offers,
      needs: data.needs,
      numberOfOpps: data.numberOfOpps,
    };
  }

  onSubmit(): void {
    this.loading = true;
    this.profileService.editProfile(this.profile).subscribe(
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

  onClose(): void {
    this.dialogRef.close();
  }

  resetCompany(): void {
    if (!this.profile.occupation || this.profile.occupation !== 2) {
      this.profile.company = '';
    }
  }

  onUpLoadFile(event): void {
    if (event) {
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
  }

  addSkill(): void {
    this.profile.skillset = this.profile.skillset ? this.profile.skillset : [];
    this.profile.skillset.push("");console.log('skills======', this.profile.skillset)
  }

  deleteSkill(index): void {
    this.profile.skillset.splice(index, 1);
  }

  onchangeSkill(event, index): void {
    event.preventDefault();
    this.profile.skillset[index] = event.target.value;
    console.log('onchange', index, event.target.value, this.profile.skillset);
  }

}
