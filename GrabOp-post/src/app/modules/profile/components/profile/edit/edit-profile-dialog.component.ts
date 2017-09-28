import {Component, Inject, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {VOUserExt} from '../../../../account/models/vouser';

// Services
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent {

  private errorMessage: string;
  private loading: boolean;
  private person: VOUserExt;
  occupations = [
    {value: 0, name: "Company"},
    {value: 1, name: "Self Employed"},
    {value: 2, name: "Seeking an Opportunity"},
    {value: 3, name: "Other"},
  ];


  constructor(public dialogRef: MdDialogRef<EditProfileDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any, private profileService: ProfileService) {
    this.loading = false;
    this.person = data;
  }

  onSubmit(): void {
    this.loading = true;
    this.profileService.editProfile(this.person, [
      success => {
        console.log("EditProfileDialog success", success)
      },
      err => {
        console.log("EditProfileDialog err: ", err)
      },
      () => {
      this.loading = false;
      }
    ])
  }

  onClose(): void {
    this.dialogRef.close();
  }

  resetCompany(): void {
    if (!this.person.occupation) {
      this.person.company = '';
    }
  }

  onUpLoadFile(): void {

  }

}
