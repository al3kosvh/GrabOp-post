import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

// Components
import { HomeComponent } from './components/home/home.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { ProfileProgressComponent } from './components/profile-progress/profile-progress.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';

// Services
import { HomeService } from './services/home.service';

// Import App Modules
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';
import { AccountModule } from '../account/account.module';

const homeRoute: Routes = [    
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forChild(homeRoute),
        SharedModule,
        PostModule,
        AccountModule
    ],
    declarations: [
        HomeComponent,
        UserBioComponent,
        ProfileProgressComponent,
        UserCommentsComponent
        // PostsFilterPipe
    ],
    providers: [
        HomeService
    ],
    entryComponents: [UserCommentsComponent]
})
export class HomeModule { }
