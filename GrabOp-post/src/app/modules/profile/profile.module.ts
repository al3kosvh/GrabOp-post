import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatTabsModule, MatInputModule,
    MatSlideToggleModule, MatSliderModule, MatSelectModule, MatProgressSpinnerModule
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
import { SettingSlideToggleComponent } from './components/settings/setting-slide-toggle/setting-slide-toggle.component';
import { SettingSliderComponent } from './components/settings/setting-slider/setting-slider.component';
import { SettingSelectComponent } from './components/settings/setting-select/setting-select.component';
import { SecuritySettingsComponent } from './components/settings/security-settings/security-settings.component';
import { EmailUsernameSettingsComponent } from './components/settings/email-username-settings/email-username-settings.component';

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
        MatSliderModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
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
        SettingSlideToggleComponent,
        SettingSliderComponent,
        SettingSelectComponent,
        SecuritySettingsComponent,
        EmailUsernameSettingsComponent
    ],
    providers: [
        ProfileService,
        SettingsService
    ],
    entryComponents: [EditProfileDialogComponent]
})

export class ProfileModule { }
