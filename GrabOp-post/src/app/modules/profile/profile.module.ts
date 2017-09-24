import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Shared Modules
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

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
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),        
        FormsModule,
        SharedModule,
        PipesModule,
        PostModule        
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
