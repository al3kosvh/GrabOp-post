import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import {MaterialModuleApp} from '../shared/material-app.module';
import {MdIconModule, MdInputModule} from '@angular/material';
import {HelpComponent} from './help/help.component';
import {ModalWindowService} from "../services/modal-window.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModuleApp,
    MdIconModule,
    FormsModule
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
