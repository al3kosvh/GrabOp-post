import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Shared  Modules
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import {PostsList} from "./posts-list";

// Components
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { ListRowComponent } from "./components/list-row/list-row.component";
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ModalPromptComponent } from './components/modal-prompt/modal-prompt.component';
import { MembersListComponent } from './components/member-list/members-list.component';
import { SigninButtonComponent } from '../modules/account/components/signin/button/signin-button.component';
import { SignupButtonComponent } from '../modules/account/components/signup/button/signup-button.component';

// Services
import { PostsService } from '../services/posts.service';
import { MyPostsService } from '../services/my-posts.service';
//import {PostEditService} from '../post-edit/post-edit.service';

// Directives
import { MdImageDirective } from "./directives/md-image.directive";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    exports: [
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        MdImageDirective,
        MembersListComponent,
        PostsCardComponent,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent,
        SigninButtonComponent,
        SignupButtonComponent
    ],
    declarations: [
        PostsCardComponent,
        MdImageDirective,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent,
        MembersListComponent,
        SigninButtonComponent,
        SignupButtonComponent
    ],
    providers: [
        // PostEditService,
        PostsService
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent
    ]
})
export class SharedModule { }
