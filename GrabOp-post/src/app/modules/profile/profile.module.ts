import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Components
import { ProfileComponent } from './components/profile/profile.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AllianceInviteComponent } from './components/alliance-invite/alliance-invite.component';

// Services
import { ProfileService } from './services/profile.service';
import { ConnectionService } from '../connection/services/connection.service';

// Pipes
import { PostsFilterPipe } from '../../pipes/posts-filter.pipe';
import { PipesModule } from '../../pipes/pipes.module';


const routes: Routes = [
    { path: ':id', component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PipesModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProfileComponent,
        ResumeComponent,
        AllianceInviteComponent
        // PostsFilterPipe
    ],
    providers: [
        ProfileService,
        ConnectionService
    ]
})

export class ProfileModule { }
