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
import { ListRowComponent } from "./components/list-row/list-row.component";
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ModalPromptComponent } from './components/modal-prompt/modal-prompt.component';
import { MembersListComponent } from './components/member-list/members-list.component';

// Directives
import { MdImageDirective } from "./directives/md-image.directive";

// Services
import { ModalWindowService } from './services/modal-window.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
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
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent        
    ],
    declarations: [        
        MdImageDirective,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent,
        MembersListComponent
    ],
    providers: [
        ModalWindowService
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent
    ]
})
export class SharedModule { }
