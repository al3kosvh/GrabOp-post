import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {
  MatIconModule,
  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,
  MatTabsModule,
  MatInputModule,
  MdExpansionModule
} from '@angular/material';

// Shared Modules
import {SharedModule} from '../shared/shared.module';
import {PostModule} from '../post/post.module';

// Components
import {ProfileComponent} from './components/profile/profile.component';
import {EditProfileDialogComponent} from './components/profile/edit/edit-profile-dialog.component';
import {VideoProfileDialogComponent} from './components/profile/video/video-profile-dialog.component';
import {ResumeComponent} from './components/resume/resume.component';
import {AllianceInviteComponent} from './components/alliance-invite/alliance-invite.component';

// Services
import {ProfileService} from './services/profile.service';

// Pipes
import {PostsFilterPipe} from '../../pipes/posts-filter.pipe';
import {PipesModule} from '../../pipes/pipes.module';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    PipesModule,
    PostModule,
    MdExpansionModule
  ],
  declarations: [
    ProfileComponent,
    EditProfileDialogComponent,
    VideoProfileDialogComponent,
    ResumeComponent,
    AllianceInviteComponent
    // PostsFilterPipe
  ],
  providers: [
    ProfileService,
  ],
  entryComponents: [
    EditProfileDialogComponent,
    VideoProfileDialogComponent
  ]
})

export class ProfileModule {
}
