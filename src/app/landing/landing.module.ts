import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LandingComponent} from "./landing.component";
import {MySharedModule} from '../shared/shared.module';
import {MaterialModuleApp} from '../shared/material-app.module';


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    MaterialModuleApp
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
