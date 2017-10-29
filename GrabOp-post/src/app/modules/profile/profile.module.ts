import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatTabsModule, MatInputModule,
    MatSlideToggleModule, MatSliderModule, MatSelectModule, MatProgressSpinnerModule, MatChipsModule,
    MatExpansionModule, MatCardModule, MatSidenavModule
} from '@angular/material';

// Shared Modules
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';
import { SearchModule } from '../search/search.module';

// Components
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit/edit-profile.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AllianceInviteComponent } from './components/alliance-invite/alliance-invite.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingSlideToggleComponent } from './components/settings/setting-slide-toggle/setting-slide-toggle.component';
import { SettingSliderComponent } from './components/settings/setting-slider/setting-slider.component';
import { SettingSelectComponent } from './components/settings/setting-select/setting-select.component';
import { SecuritySettingsComponent } from './components/settings/security-settings/security-settings.component';
import { EmailUsernameSettingsComponent } from './components/settings/email-username-settings/email-username-settings.component';
import { VideoProfileDialogComponent } from './components/profile/video/video-profile-dialog.component';
import { SetConnectionComponent } from './components/profile/set-connection/set-connection.component';

// Services
import { ProfileService } from './services/profile.service';
import { SettingsService } from './services/settings.service';
import { AllianceService } from './services/alliance.service';
import { ProfileGuard } from './services/profile.guard';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'alliance-invite', component: AllianceInviteComponent, outlet: 'aux', data: { animation: 'in' } },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [ProfileGuard] },
    { path: 'settings/:id', component: SettingsComponent },
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
        MatChipsModule,
        MatCardModule,
        MatSidenavModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        PostModule,
        MatExpansionModule,
        SearchModule
    ],
    declarations: [
        ProfileComponent,
        EditProfileComponent,
        ResumeComponent,
        AllianceInviteComponent,
        SettingsComponent,
        SettingSlideToggleComponent,
        SettingSliderComponent,
        SettingSelectComponent,
        SecuritySettingsComponent,
        EmailUsernameSettingsComponent,
        VideoProfileDialogComponent,
        SetConnectionComponent
    ],
    exports: [
        AllianceInviteComponent,
        SetConnectionComponent
    ],
    providers: [
        ProfileService,
        SettingsService,
        AllianceService,
        ProfileGuard
    ],
    entryComponents: [
        EditProfileComponent,
        VideoProfileDialogComponent,
        SetConnectionComponent
    ]
})

export class ProfileModule { }
