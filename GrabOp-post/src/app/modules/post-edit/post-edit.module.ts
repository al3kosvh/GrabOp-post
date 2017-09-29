import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule, MatSlideToggleModule } from '@angular/material';

// Components
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostEditAllianceComponent } from './components/post-edit-alliance/post-edit-alliance.component';
import { PostEditBasicComponent } from './components/post-edit-basic/post-edit-basic.component';
import { PostEditMediaComponent } from './components/post-edit-media/post-edit-media.component';
import { PostEditStyleComponent } from './components/post-edit-style/post-edit-style.component';
import { PostEditToolsComponent } from './components/post-edit-tools/post-edit-tools.component';
// import {MembersListComponent} from '../shared/member-list/members-list.component';

// Services
import { PostEditService } from './services/post-edit.service';
import { SharedModule } from '../shared/shared.module';
// import {UploadService} from '../myservices/upload-service';

// import {UploadService} from '../services/upload.service';

const routes: Routes = [
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
        ReactiveFormsModule,
        SharedModule,
        MatGridListModule,
        MatSlideToggleModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PostEditComponent,
        PostEditAllianceComponent,
        PostEditMediaComponent,
        PostEditBasicComponent,
        PostEditToolsComponent,
        PostEditStyleComponent
        // MembersListComponent
    ],
    // ,exports:[PostEditMain]
    providers: [
        PostEditService
    ]
})
export class PostEditModule { }
