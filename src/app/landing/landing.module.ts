import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LandingComponent} from "./landing.component";
import {MySharedModule} from '../shared/shared.module';
import {MaterialModuleApp} from '../shared/material-app.module';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    MaterialModuleApp,
    RouterModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
