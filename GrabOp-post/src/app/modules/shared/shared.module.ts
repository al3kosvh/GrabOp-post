import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatListModule, MatSnackBarModule, MatSnackBarContainer, MatSnackBar } from '@angular/material';
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
import { HttpErrorService } from './services/http-error.service';

@NgModule({
    imports: [
        FormsModule,
        FlexLayoutModule,
        MatInputModule,
        MatListModule,
        MatSnackBarModule
    ],
    exports: [
        FlexLayoutModule,
        MatImageDirective,
        MembersListComponent,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent
    ],
    declarations: [
        MatImageDirective,
        ListRowComponent,
        ModalAlertComponent,
        ModalPromptComponent,
        MembersListComponent
    ],
    providers: [
        ModalWindowService,
        SnackBarService,
        HttpErrorService,
        MatSnackBar
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalPromptComponent,
        MatSnackBarContainer
    ]
})
export class SharedModule { }
