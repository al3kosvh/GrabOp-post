import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { ProfileProgressComponent } from './components/profile-progress/profile-progress.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';

// Services
import { HomeService } from './services/home.service';
import { PostsService } from '../services/posts.service';
import { ModalWindowService } from '../shared/services/modal-window.service';
import { MyPostsService } from '../services/my-posts.service';

// Pipes
import { PostsFilterPipe } from '../pipes/posts-filter.pipe';

// Import App Modules
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

const homeRoute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];

export const homeRouting = RouterModule.forChild(homeRoute);

@NgModule({
    imports: [
        homeRouting,
        CommonModule,
        SharedModule,
        PipesModule
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
