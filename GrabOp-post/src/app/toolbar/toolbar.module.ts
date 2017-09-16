import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HelpComponent } from './components/help/help.component';
import { ModalWindowService } from "../shared/services/modal-window.service";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        ToolbarComponent,
        HelpComponent
    ],
    providers: [ModalWindowService],
    exports: [ToolbarComponent],
    entryComponents: [HelpComponent]
})
export class ToolbarModule {

}
