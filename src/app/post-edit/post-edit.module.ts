
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {PostEditComponent} from './post-edit.component';
import {PostEditAllianceComponent} from './post-edit-alliance/post-edit-alliance.component';
import {PostEditBasicComponent} from './post-edit-basic/post-edit-basic.component';
import {PostEditMediaComponent} from './post-edit-media/post-edit-media.component';
import {PostEditStyleComponent} from './post-edit-style/post-edit-style.component';
import {PostEditToolsComponent} from './post-edit-tools/post-edit-tools.component';
// import {MembersListComponent} from '../shared/member-list/members-list.component';
import {PostEditService} from './post-edit.service';
import {
  MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdSelectModule, MdSlideToggleModule,
  MdTabsModule
} from '@angular/material';
// import {UploadService} from '../myservices/upload-service';

import {MaterialModuleApp} from "../shared/material-app.module";
// import {UploadService} from '../services/upload.service';




const posteditRoutes = [
  {path: ':id', component: PostEditComponent},
  {path: ':id/:type', component: PostEditComponent}
  // {path: ':id/:step', component: PostEditComponent}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleApp,
    MdIconModule,
    RouterModule.forChild(posteditRoutes)
  ],
  declarations: [
    PostEditComponent,
    PostEditAllianceComponent,
    PostEditMediaComponent,
    PostEditBasicComponent,
    PostEditToolsComponent,
    PostEditStyleComponent
   // MembersListComponent
  ],
 // ,exports:[PostEditMain]
  providers: [
    PostEditService
  ]
})
export class PostEditModule {}
