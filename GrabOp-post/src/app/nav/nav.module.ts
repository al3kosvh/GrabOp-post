import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { HelpComponent } from './help/help.component';
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
        NavComponent,
        HelpComponent
    ],
    providers: [ModalWindowService],
    exports: [NavComponent],
    entryComponents: [HelpComponent]
})
export class NavModule {

}
