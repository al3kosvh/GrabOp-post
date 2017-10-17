import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
    MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, MatSlideToggleModule,
    MatTabsModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatMenuModule
} from '@angular/material';

import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { MyPostViewComponent } from './components/my-post-view/my-post-view.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostCardComponent } from './components/post-card/post-card.component';

import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostAllianceComponent } from './components/post-alliance/post-alliance.component';
import { PostBasicComponent } from './components/post-basic/post-basic.component';
import { PostMediaComponent } from './components/post-media/post-media.component';
import { PostStyleComponent } from './components/post-style/post-style.component';
import { PostToolsComponent } from './components/post-tools/post-tools.component';

// Services
import { PostService } from './services/post.service';

import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';


const myRoute: Routes = [
    //{ path: 'my-preview/:idMyPost', component: MyPostViewComponent },
    //{ path: 'person-preview/:idPost/:idPerson', component: PostViewComponent },
    { path: 'posts/:id', component: PostViewComponent },
    { path: 'myposts', component: MyPostsComponent },
    { path: 'myposts/view/:id', component: MyPostViewComponent },
    { path: 'post-edit/:id/:type', component: PostEditComponent },

    // {path: 'my-selected/:idSelectedMyPost', component: MyPostViewComponent}
    // {path: 'person/:idPerson/:idPost', component: PostViewComponent}

    //{ path: ':id', component: PostEditComponent },
    //{ path: ':id/:type', component: PostEditComponent },
    //{ path: 'post-edit', component: PostEditComponent, outlet: 'slideRight' },
    //{ path: 'post-edit/:id', component: PostEditComponent, outlet: 'slideRight' },
    
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
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatMenuModule,
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
        PostAllianceComponent,
        PostMediaComponent,
        PostBasicComponent,
        PostToolsComponent,
        PostStyleComponent,
        PostCreateComponent
    ],
    exports: [
        PostCardComponent
    ],
    providers: [
        PostService
    ],
    entryComponents: [PostCreateComponent]
})
export class PostModule { }
