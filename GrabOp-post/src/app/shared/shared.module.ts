import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {PostEditService} from '../post-edit/post-edit.service';

//import {PostsList} from "./posts-list";
//import {PostsCard} from "./posts-card";
import { MembersList } from "./members-list";
import { ListRow } from "./list-row";
import { PostsService } from '../services/posts.service';
import { PostsCardComponent } from './posts-card/posts-card.component';
import { MdButtonModule, MdChipsModule, MdGridListModule, MdIconModule } from "@angular/material";
import { MyPostsService } from '../services/my-posts.service';
import { RouterModule } from '@angular/router';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ModalPromptComponent } from './modal-prompt/modal-prompt.component';
import { FormsModule } from '@angular/forms';
import { MembersListComponent } from './member-list/members-list.component';
import { LoginButtonComponent } from '../app-login/login-button/login-button.component';
import { LoginNewButtonComponent } from '../app-login/login-new-button/login-new-button.component';

// Directives
import { MdImage } from "./directives/md-image";

// Shared  Modules
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        // MdButtonModule,
        // MdGridListModule,
        MdIconModule,
        MdChipsModule,
    ],
    exports: [
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        MdImage,
        MembersList,
        MembersListComponent,
        PostsCardComponent,
        ListRow,
        ModalAlertComponent,
        ModalPromptComponent,
        LoginButtonComponent,
        LoginNewButtonComponent
    ],
    declarations: [
        PostsCardComponent,
        MdImage,
        MembersList,
        ListRow,
        ModalAlertComponent,
        ModalPromptComponent,
        MembersListComponent,
        LoginButtonComponent,
        LoginNewButtonComponent
    ]
    , providers: [
        // PostEditService,
        PostsService
    ]
    , entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent
    ]
})
export class SharedModule { }
