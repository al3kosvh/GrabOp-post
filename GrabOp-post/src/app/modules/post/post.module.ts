import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { MyPostViewComponent } from './components/my-post-view/my-post-view.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostCardComponent } from './components/post-card/post-card.component';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostEditAllianceComponent } from './components/post-edit-alliance/post-edit-alliance.component';
import { PostEditBasicComponent } from './components/post-edit-basic/post-edit-basic.component';
import { PostEditMediaComponent } from './components/post-edit-media/post-edit-media.component';
import { PostEditStyleComponent } from './components/post-edit-style/post-edit-style.component';
import { PostEditToolsComponent } from './components/post-edit-tools/post-edit-tools.component';

// Services
import { PostService } from './services/post.service';

import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';


const myRoute: Routes = [
    //{ path: 'my-preview/:idMyPost', component: MyPostViewComponent },
    //{ path: 'person-preview/:idPost/:idPerson', component: PostViewComponent },
    { path: 'posts/:id', component: PostViewComponent }

    // {path: 'my-selected/:idSelectedMyPost', component: MyPostViewComponent}
    // {path: 'person/:idPerson/:idPost', component: PostViewComponent}

    //{ path: ':id', component: PostEditComponent },
    //{ path: ':id/:type', component: PostEditComponent },
    //{ path: 'post-edit', component: PostEditComponent, outlet: 'slideRight' },
    //{ path: 'post-edit/:id', component: PostEditComponent, outlet: 'slideRight' },
    //{ path: 'post-edit/:id/:type', component: PostEditComponent, outlet: 'slideRight' },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        SharedModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        RouterModule.forChild(myRoute)
    ],
    declarations: [
        MyPostViewComponent,
        PostViewComponent,
        PostDetailsComponent,
        PostInfoComponent,
        MyPostsComponent,
        PostCardComponent,
        PostEditComponent,
        PostEditAllianceComponent,
        PostEditMediaComponent,
        PostEditBasicComponent,
        PostEditToolsComponent,
        PostEditStyleComponent
    ],
    exports: [
        PostCardComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule { }
