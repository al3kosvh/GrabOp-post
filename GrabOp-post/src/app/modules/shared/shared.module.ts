import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Shared  Modules
import {
    MatInputModule, MatListModule, MatGridListModule, MatChipsModule, MatSlideToggleModule, MatRadioModule, MatMenuModule,
    MdIconRegistry, MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatCardModule, MatCheckboxModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
        FormsModule,        
        FlexLayoutModule,
        // Material modules
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
    ],
    exports: [
        FlexLayoutModule,
        // Export Material modules
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,

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
        ModalWindowService,
        MdIconRegistry
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent
    ]
})
export class SharedModule { }
