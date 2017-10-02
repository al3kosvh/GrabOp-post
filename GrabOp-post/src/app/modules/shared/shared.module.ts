import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatListModule, MdSnackBarModule, MdSnackBarContainer, MdSnackBar } from '@angular/material';
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
import { SnackBarService } from './services/snackbar.service';
import { ErrorService } from './services/error.service';

@NgModule({
    imports: [        
        FormsModule,        
        FlexLayoutModule,
        MatInputModule,
        MatListModule,
        MdSnackBarModule
    ],
    exports: [
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
        ModalWindowService,
        SnackBarService,
        ErrorService,
        MdSnackBar
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent,
        MdSnackBarContainer
    ]
})
export class SharedModule { }
