import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatTabsModule, MatInputModule,
    MatSlideToggleModule,
} from '@angular/material';

// Shared Modules
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

// Components
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileDialogComponent } from './components/profile/edit/edit-profile-dialog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AllianceInviteComponent } from './components/alliance-invite/alliance-invite.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingComponent } from './components/settings/setting/setting.component';

// Services
import { ProfileService } from './services/profile.service';
import { SettingsService } from './services/settings.service';

// Pipes
import { PostsFilterPipe } from '../../pipes/posts-filter.pipe';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'settings/:id', component: SettingsComponent }
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
        MatSlideToggleModule,
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
        PipesModule,
        PostModule
    ],
    declarations: [
        ProfileComponent,
        EditProfileDialogComponent,
        ResumeComponent,
        AllianceInviteComponent,
        SettingsComponent,
        SettingComponent
    ],
    providers: [
        ProfileService,
        SettingsService
    ],
    entryComponents: [EditProfileDialogComponent]
})

export class ProfileModule { }
