import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatListModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

//import {PostsList} from "./posts-list";

// Components
import { ListRowComponent } from "./components/list-row/list-row.component";
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { MembersListComponent } from './components/member-list/members-list.component';

// Directives
import { MatImageDirective } from "./directives/mat-image.directive";

// Services
import { DialogService } from './services/dialog.service';
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
        MatSnackBarModule,
        MatDialogModule
    ],
    exports: [
        FlexLayoutModule,
        MatImageDirective,
        MembersListComponent,
        ListRowComponent,
        ModalAlertComponent,
        DialogConfirmComponent,
        TruncateTextPipe
    ],
    declarations: [
        MatImageDirective,
        ListRowComponent,
        ModalAlertComponent,
        DialogConfirmComponent,
        MembersListComponent,
        TruncateTextPipe
    ],
    providers: [
        DialogService,
        SnackBarService,
        TruncateTextPipe,
        UploadService
    ],
    entryComponents: [
        ModalAlertComponent,
        DialogConfirmComponent
    ]
})
export class SharedModule { }
