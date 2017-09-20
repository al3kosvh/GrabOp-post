import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyPostViewComponent } from './components/my-post-view/my-post-view.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { MyPostsService } from '../post/services/my-posts.service';
import { PostsService } from '../post/services/posts.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { ProfileService } from '../account/services/profile.service';

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
        MyPostsComponent,
        PostCardComponent
    ],
    exports: [
        PostCardComponent
    ],
    providers: [
        MyPostsService,
        PostsService,
        ProfileService
    ]
})
export class PostModule { }
