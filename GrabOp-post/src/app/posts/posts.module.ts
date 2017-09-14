import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyPostViewComponent } from './my-post-view/my-post-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { MyPostsService } from '../services/my-posts.service';
import { PostsService } from '../services/posts.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

import { MyPostsComponent } from './my-posts/my-posts.component';
import { ProfileService } from '../services/profile.service';

const myRoute: Routes = [
    { path: 'my-preview/:idMyPost', component: MyPostViewComponent },
    { path: 'person-preview/:idPost/:idPerson', component: PostViewComponent },
    // {path: 'person-preview/:idPost', component: PostViewComponent}

    // {path: 'my-selected/:idSelectedMyPost', component: MyPostViewComponent}
    // {path: 'person/:idPerson/:idPost', component: PostViewComponent}
];

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        SharedModule,
        RouterModule.forChild(myRoute)
    ],
    declarations: [
        MyPostViewComponent,
        PostViewComponent,
        PostDetailsComponent,
        PostInfoComponent,
        MyPostsComponent
    ],
    providers: [
        MyPostsService,
        PostsService,
        ProfileService
    ]
})
export class PostsModule { }
