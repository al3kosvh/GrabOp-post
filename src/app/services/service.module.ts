import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ServiceComponent } from './service.component';

import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
   ]
 // declarations: [ ServiceComponent ],
 // exports: [ ServiceComponent ]
})
export class ServiceModule {}
