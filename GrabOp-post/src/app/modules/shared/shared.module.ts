import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

//import {PostsList} from "./posts-list";

// Components
import { ListRowComponent } from "./components/list-row/list-row.component";
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ModalPromptComponent } from './components/modal-prompt/modal-prompt.component';
import { MembersListComponent } from './components/member-list/members-list.component';

// Directives
import { MatImageDirective } from "./directives/mat-image.directive";

// Services
import { ModalWindowService } from './services/modal-window.service';
import { SnackBarService } from './services/snackbar.service';
import { UploadService } from './services/upload.service';

// Pipes
import { TruncateTextPipe } from './pipes/truncate.pipe';

@NgModule({
    imports: [
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatListModule,
        MatSnackBarModule
    ],
    exports: [
        FlexLayoutModule,
        MatImageDirective,
        MembersListComponent,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent,
        TruncateTextPipe
    ],
    declarations: [
        MatImageDirective,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent,
        MembersListComponent,
        TruncateTextPipe
    ],
    providers: [
        ModalWindowService,
        SnackBarService,
        TruncateTextPipe,
        UploadService
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent
    ]
})
export class SharedModule { }
