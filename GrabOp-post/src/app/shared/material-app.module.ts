import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdRadioModule,
  MdToolbarModule,
  MdTabsModule
} from "@angular/material";


@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdToolbarModule,
    MdTabsModule,
    MdDialogModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdToolbarModule,
    MdTabsModule,
    MdDialogModule

  ]
})

export class MaterialModuleApp { }
