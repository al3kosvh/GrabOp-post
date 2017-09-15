import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { HomeService } from './home-service';
import { PostsService } from '../services/posts.service';

import { UserBioComponent } from './user-bio/user-bio.component';
import { ProfileProgressComponent } from './profile-progress/profile-progress.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { SharedModule } from '../shared/shared.module';
import { ModalWindowService } from '../shared/services/modal-window.service';
import { MyPostsService } from '../services/my-posts.service';
import { PostsFilterPipe } from '../pipes/posts-filter.pipe';
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
